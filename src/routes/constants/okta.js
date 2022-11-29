const OKTA = {
    ISSUER: process.env.REACT_APP_OKTA_ISSUER,
    ORG_URL: process.env.REACT_APP_OKTA_ORG_URL,
    CLIENT_ID: process.env.REACT_APP_OKTA_CLIENT_ID,
    SCOPES: process.env.REACT_APP_OKTA_SCOPES?.split(' ')
        ?? ['email', 'offline_access', 'openid', 'profile'],
    LOGIN_REDIRECT_PATH: process.env.REACT_APP_OKTA_LOGIN_REDIRECT_PATH
        ?? '/login/callback'
};

export default OKTA;
