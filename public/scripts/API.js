const API = {
    endpoint: "/auth/",
    webAuthn: {
        loginOptions: async (email) => {
            return await API.makePostRequest(API.endpoint + "webauth-login-options", { email });
        },
        loginVerification: async (email, data) => {
            return await API.makePostRequest(API.endpoint + "webauth-login-verification", {
                email,
                data
            });                       
        },
        registrationOptions: async () => {
            return await API.makePostRequest(API.endpoint + "webauth-registration-options", Auth.account);           
        },
        registrationVerification: async (data) => {
            return await API.makePostRequest(API.endpoint + "webauth-registration-verification", {
                user: Auth.account,
                data
            });                       
        }
    },
    login: async (user) => {
        return await API.makePostRequest(API.endpoint + "login", user);
    },
    register: async (user) => {
        return await API.makePostRequest(API.endpoint + "register", user);
    },
    checkAuthOptions:  async (user) => {
        return await API.makePostRequest(API.endpoint + "auth-options", user);
    },
    makePostRequest: async (url, data) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

}

export default API;
