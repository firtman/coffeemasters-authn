import API from "./API.js";
import Router from "./Router.js";

const Auth = {
    isLoggedIn: false,
    account: null,
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
        
    },
}
Auth.updateStatus();

export default Auth;

// make it a global object
window.Auth = Auth;
