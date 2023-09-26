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

// ADD THE REST OF THE ENDPOINTS HERE:

app.get("*", (req, res) => {
    res.sendFile(__dirname + "public/index.html"); 
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

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
      res.send({ok: false, message: 'Data is invalid'});
  }
});

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
      // New User
      db.data.users.push(user);
      db.write();
      res.send({ok: true});
  }
});