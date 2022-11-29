import OKTA from '../constants';

const OKTA_AUTH_CONFIG = {
    issuer: OKTA.ISSUER,
    scopes: OKTA.SCOPES,
    clientId: OKTA.CLIENT_ID,
    postLogoutRedirectUri: `${window.location.origin}/login`,
    redirectUri: `${window.location.origin}${OKTA.LOGIN_REDIRECT_PATH}`
};

export { OKTA_AUTH_CONFIG };
