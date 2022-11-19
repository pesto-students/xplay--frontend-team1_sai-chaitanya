import React, { lazy, Suspense, useState } from 'react';
import { Progress } from 'antd';
import * as Sentry from "@sentry/react";
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';

import { Login } from '../components';
import { jwtInterceptor } from './interceptors';
import { OKTA_AUTH_CONFIG, SENTRY_CONFIG } from './config';


const FeaturedMovies = lazy(()=> 
    import('../pages/featuredMovies'));
const Home = lazy(() => 
    import('../pages/home/Home'));
const SignUp = lazy(() =>
    import('../components/organisms/forms/signUp/SignUp'));
const CorsErrorModal = lazy(() =>
    import('../components/templates/corsErrorModal/CorsErrorModal'));
const AuthRequiredModal = lazy(() =>
    import('../components/templates/authRequiredModal/AuthRequiredModal'));
const WatchList = lazy(() =>
    import('../pages/watchList'));
const LatestOnXplay=lazy(()=>
    import('../pages/latestOnXplay'));
const MoreLikeThis=lazy(()=>
    import('../pages/moreLikeThis'));    
const SearchMovie=lazy(()=>
    import('../pages/searchMovie'));


const oktaAuth = new OktaAuth(OKTA_AUTH_CONFIG);

jwtInterceptor();

Sentry.init(SENTRY_CONFIG);

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
        <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
            <Suspense fallback={<Progress type='circle' />}>
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
                        <SecureRoute exact path="/watchList" component={WatchList} />
                        <SecureRoute exact path="/featuredMovies" component={FeaturedMovies}/>
                        <SecureRoute exact path="/latestOnXplay" component={LatestOnXplay}/>
                        <SecureRoute exact path="/moreLikeThis" component={MoreLikeThis}/>
                        <SecureRoute exact path="/searchMovie" component={SearchMovie}/>
                        <Redirect from='/' to='/home' />
                    </Switch>
                </Security>
            </Suspense>
        </Sentry.ErrorBoundary>
    );
}

export default SecuredRoutes;
