interface AuthConfiguration {
    clientID: string;
    domain: string;
    callbackURL: string;
}

export const CONFIG: AuthConfiguration = {
    clientID: 'tx2kgejG4YGc950wwEMAFHH0Qv9z12BN',
    domain: 'exceptioncommittee.auth0.com',
    // You may need to change this!
    callbackURL: 'http://localhost:4200/home'
};
