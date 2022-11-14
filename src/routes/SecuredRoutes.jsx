import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';

import { Home } from '../pages';
import { jwtInterceptor } from './interceptors';
import { OKTA_AUTH_CONFIG } from './config/okta';
import { AuthRequiredModal, CorsErrorModal } from '../templates';
import { Login, SignUp } from '../organisms';

const oktaAuth = new OktaAuth(OKTA_AUTH_CONFIG);

jwtInterceptor();

const SecuredRoutes = () => {
    const [corsErrorModalOpen, setCorsErrorModalOpen] = useState(false);
    const [authRequiredModalOpen, setAuthRequiredModalOpen] = useState(false);

    const history = useHistory();
    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    };

    const triggerLogin = () => {
        // Redirect to the /login page that has a CustomLoginComponent
        history.push('/login');
    };

    const customAuthHandler = async () => {
        const previousAuthState = oktaAuth.authStateManager.getPreviousAuthState();
        if (!previousAuthState || !previousAuthState.isAuthenticated) {
            // App initialization stage
            triggerLogin();
        } else {
            // Ask the user to trigger the login process during token autoRenew process
            setAuthRequiredModalOpen(true);
        }
    };

    const onAuthResume = async () => {
        history.push('/login');
    };

    return (
        <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
        >
            <CorsErrorModal {...{ corsErrorModalOpen, setCorsErrorModalOpen }} />
            <AuthRequiredModal {...{ authRequiredModalOpen, setAuthRequiredModalOpen, triggerLogin }} />
            <Switch>
                <Route path="/login/callback"
                    component={(props) => <LoginCallback {...props} onAuthResume={onAuthResume} />} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <SecureRoute exact path="/home" component={Home} />
                <Redirect from='/' to='/home' />
            </Switch>
        </Security>
    );
}

export default SecuredRoutes;
