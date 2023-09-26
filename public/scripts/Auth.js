import API from "./API.js";
import Router from "./Router.js";

//todo add validation

const Auth = {
    isLoggedIn: false,
    account: null,
    loginStep: 1,
    autoLogin: async () => {
        if (window.PasswordCredential) {
            const credentials = await navigator.credentials.get({ password: true });
            try {
                document.getElementById("login_email").value = credentials.id;
                document.getElementById("login_password").value = credentials.password;
                Auth.login();
            } catch (e) {}
        }
    },
    addWebAuthn: async () => {  
        const options = await API.webAuthn.registrationOptions();        
        options.authenticatorSelection.residentKey = 'required';
        options.authenticatorSelection.requireResidentKey = true;
        options.extensions = {
            credProps: true,
        };
        const authRes = await SimpleWebAuthnBrowser.startRegistration(options);
        const verificationRes = await API.webAuthn.registrationVerification(authRes);
        if (verificationRes.ok) {
            alert("You can now login using the registered method!");
        } else {
            alert(verificationRes.message)
        }
    },    
    checkAuthOptions: async (event) => {
        const response = await API.checkAuthOptions({
            email: document.getElementById("login_email").value
        });
        if (response.password) {
            document.getElementById("login_section_password").hidden = false;
        }
        if (response.webauthn) {
            document.getElementById("login_section_webauthn").hidden = false;
        }
        Auth.challenge = response.challenge;
        Auth.loginStep = 2;
    },
    webAuthnLogin: async (optional) => {
        const email = document.getElementById("login_email").value;
        const options = await API.webAuthn.loginOptions(email);        
        const loginRes = await SimpleWebAuthnBrowser.startAuthentication(options);
        const verificationRes = await API.webAuthn.loginVerification(email, loginRes);
        if (verificationRes) {
            Auth.postLogin(verificationRes, verificationRes.user);
        } else {
            alert(verificationRes.message)
        }
    },
    login: async (event) => {
        if (event) event.preventDefault();
        if (Auth.loginStep==1) {
            Auth.checkAuthOptions();
        } else {
            const user = {
                email: document.getElementById("login_email").value,
                password: document.getElementById("login_password").value
    
            };
            const response = await API.login(user);
            Auth.postLogin(response, { 
                ...user,
                name: response.name
            });
        }
    },
    register: async  (event) => {
        event.preventDefault();
        const user = {
            name: document.getElementById("register_name").value,
            email: document.getElementById("register_email").value,
            password: document.getElementById("register_password").value
        }
        const response = await API.register(user);
        Auth.postLogin(response, user);
    },
    postLogin: async (response, user) => {
        if (response.ok) {
            Auth.isLoggedIn = true;
            Auth.account = user;
            Auth.updateStatus();
            Router.go("/account");    
            Auth.loginStep = 1;
            //if we enable autoLogin 
            // Credential Management API
            if (window.PasswordCredential && user.password) {
                const credential = new PasswordCredential({
                    name: user.name,
                    id: user.email,
                    password: user.password
                });
                await navigator.credentials.store(credential);
            }     
        } else {
            alert(response.message)
        }         
        
    },    
    logout: () => {
        Auth.isLoggedIn = false;
        Auth.account = null;
        Auth.updateStatus();
        Router.go("/");
        // if (window.PasswordCredential) {
        //     navigator.credentials.preventSilentAccess()
        // }
    },
    updateStatus() {
        if (Auth.isLoggedIn && Auth.account) {
            document.querySelectorAll(".logged_out").forEach(
                e => e.style.display = "none"
            );
            document.querySelectorAll(".logged_in").forEach(
                e => e.style.display = "block"
            );
            document.querySelectorAll(".account_name").forEach(
                e => e.innerHTML = Auth.account.name
            );
            document.querySelectorAll(".account_username").forEach(
                e => e.innerHTML = Auth.account.email
            );

        } else {
            document.querySelectorAll(".logged_out").forEach(
                e => e.style.display = "block"
            );
            document.querySelectorAll(".logged_in").forEach(
                e => e.style.display = "none"
            );

        }
    },    
    init: () => {
        Auth.loginStep = 1;
        document.getElementById('login_section_password').hidden = true;
        document.getElementById('login_section_webauthn').hidden = true; 
    },
}
Auth.updateStatus();

export default Auth;

// make it a global object
window.Auth = Auth;
