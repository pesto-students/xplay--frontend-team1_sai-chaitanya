import { OKTA_CLIENT_ID, OKTA_ISSUER } from "../constants";

const OKTA_AUTH_CONFIG = {
    issuer: OKTA_ISSUER,
    clientId: OKTA_CLIENT_ID,
    redirectUri: `${window.location.origin}/login/callback`,
    postLogoutRedirectUri: `${window.location.origin}/login`,
    scopes: ['email', 'offline_access', 'openid', 'profile']
};

export { OKTA_AUTH_CONFIG };
