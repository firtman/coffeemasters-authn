import express from 'express'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import * as url from 'url';
import bcrypt from 'bcryptjs';
import * as jwtJsDecode from 'jwt-js-decode';
import base64url from "base64url";
import SimpleWebAuthnServer from '@simplewebauthn/server';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express()
app.use(express.json())

const adapter = new JSONFile(__dirname + '/auth.json');
const db = new Low(adapter);
await db.read();
db.data ||= { users: [] }

const rpID = "localhost";
const protocol = "http";
const port = 5050;
const expectedOrigin = `${protocol}://${rpID}:${port}`;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//LOGIN

app.post("/auth/login", (req, res) => {
  const user = findUser(req.body.email);
  if (user) {
      // user exists, check password
      if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({ok: true, email: user.email, name: user.name});
      } else {
          res.send({ok: false, message: 'Data is invalid'});            
      }
  } else {
      // User doesn't exist
      res.send({ok: false, message: 'User does not exist'});
  }
});

function findUser(email) {
  const results = db.data.users.filter(u=>u.email==email);
  if (results.length==0) return undefined;
  return results[0];
}

//REGISTRATION

app.post("/auth/register", (req, res) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);

  const user = {
      name: req.body.name,
      email: req.body.email,
      password: hash
  };
  const userFound = findUser(req.body.email);

  if (userFound) {
      // User already registered
      res.send({ok: false, message: 'User already exists'});
  } else {
      // Create New User
      db.data.users.push(user);
      db.write();
      res.send({ok: true});
  }
});

app.post("/auth/auth-options", (req, res) => {
  const user = findUser(req.body.email);    

  if (user) {
      res.send({
          password: true,
          google: user.federated && user.federated.google,
          webauthn: user.webauthn
      })
  } else {
      res.send({
          password: true
      })
  }
});

app.post("/auth/webauth-registration-options", (req, res) =>{
  const user = findUser(req.body.email);

  const options = {
      rpName: 'Coffee Masters',
      rpID,
      userID: user.email,
      userName: user.name,
      timeout: 60000,
      attestationType: 'none',
      
      /**
       * Passing in a user's list of already-registered authenticator IDs here prevents users from
       * registering the same device multiple times. The authenticator will simply throw an error in
       * the browser if it's asked to perform registration when one of these ID's already resides
       * on it.
       */
      excludeCredentials: user.devices ? user.devices.map(dev => ({
          id: dev.credentialID,
          type: 'public-key',
          transports: dev.transports,
      })) : [],

      authenticatorSelection: {
          userVerification: 'required', 
          residentKey: 'required',
      },
      /**
       * The two most common algorithms: ES256, and RS256
       */
      supportedAlgorithmIDs: [-7, -257],
  };

  /**
   * The server needs to temporarily remember this value for verification, so don't lose it until
   * after you verify an authenticator response.
   */
  const regOptions = SimpleWebAuthnServer.generateRegistrationOptions(options)
  user.currentChallenge = regOptions.challenge;
  db.write();
  
  res.send(regOptions);
});

app.post("/auth/webauth-registration-verification", async (req, res) => {
  const user = findUser(req.body.user.email);
  const data = req.body.data;

  const expectedChallenge = user.currentChallenge;

  let verification;
  try {
    const options = {
      credential: data,
      expectedChallenge: `${expectedChallenge}`,
      expectedOrigin,
      expectedRPID: rpID,
      requireUserVerification: true,
    };
    verification = await SimpleWebAuthnServer.verifyRegistrationResponse(options);
  } catch (error) {
  console.log(error);
    return res.status(400).send({ error: error.toString() });
  }

  const { verified, registrationInfo } = verification;

  if (verified && registrationInfo) {
    const { credentialPublicKey, credentialID, counter } = registrationInfo;

    const existingDevice = user.devices ? user.devices.find(
      device => new Buffer(device.credentialID.data).equals(credentialID)
    ) : false;

    if (!existingDevice) {
      const newDevice = {
        credentialPublicKey,
        credentialID,
        counter,
        transports: data.transports,
      };
      if (user.devices==undefined) {
          user.devices = [];
      }
      user.webauthn = true;
      user.devices.push(newDevice);
      db.write();
    }
  }

  res.send({ ok: true });

});

app.post("/auth/webauth-login-options", (req, res) =>{
  const user = findUser(req.body.email);
  if (user==null) {
      res.sendStatus(404);
      return;
  }
  const options = {
      timeout: 60000,
      allowCredentials: [],
      devices: user && user.devices ? user.devices.map(dev => ({
        id: dev.credentialID,
        type: 'public-key',
        transports: dev.transports,
      })) : [],
      userVerification: 'required',
      rpID,
  };
  const loginOpts = SimpleWebAuthnServer.generateAuthenticationOptions(options);
  if (user) user.currentChallenge = loginOpts.challenge;
  res.send(loginOpts);
});

app.post("/auth/webauth-login-verification", async (req, res) => {
  const data = req.body.data;
  const user = findUser(req.body.email);
  if (user==null) {
      res.sendStatus(400).send({ok: false});
      return;
  } 

  const expectedChallenge = user.currentChallenge;

  let dbAuthenticator;
  const bodyCredIDBuffer = base64url.toBuffer(data.rawId);

  for (const dev of user.devices) {
    const currentCredential = Buffer(dev.credentialID.data);
    if (bodyCredIDBuffer.equals(currentCredential)) {
      dbAuthenticator = dev;
      break;
    }
  }

  if (!dbAuthenticator) {
    return res.status(400).send({ ok: false, message: 'Authenticator is not registered with this site' });
  }

  let verification;
  try {
    const options  = {
      credential: data,
      expectedChallenge: `${expectedChallenge}`,
      expectedOrigin,
      expectedRPID: rpID,
      authenticator: {
          ...dbAuthenticator,
          credentialPublicKey: new Buffer(dbAuthenticator.credentialPublicKey.data) // Re-convert to Buffer from JSON
      },
      requireUserVerification: true,
    };
    verification = await SimpleWebAuthnServer.verifyAuthenticationResponse(options);
  } catch (error) {
    return res.status(400).send({ ok: false, message: error.toString() });
  }

  const { verified, authenticationInfo } = verification;

  if (verified) {
    dbAuthenticator.counter = authenticationInfo.newCounter;
  }

  res.send({ 
      ok: true, 
      user: {
          name: user.name, 
          email: user.email
      }
  });
});


app.get("*", (req, res) => {
  res.sendFile(__dirname + "public/index.html"); 
});

app.listen(port, () => {
console.log(`App listening on port ${port}`)
});