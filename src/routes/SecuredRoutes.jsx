import React, { lazy, Suspense, useMemo, useState } from 'react';
import { Spin } from 'antd';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';

import hooks from '../hooks';
import Context from '../context';
import { store } from '../redux';
import Components from '../components';
import { jwtInterceptor } from './interceptors';
import { ROUTES, SECURED_ROUTES } from '../constants';
import { OKTA_AUTH_CONFIG, SENTRY_CONFIG } from './config';

const CorsErrorModal = lazy(() =>
	import('../components/templates/corsErrorModal')
);
const AuthRequiredModal = lazy(() =>
	import('../components/templates/authRequiredModal')
);
const SignUp = lazy(() => import('../components/organisms/forms/signUp'));

const oktaAuth = new OktaAuth(OKTA_AUTH_CONFIG);

jwtInterceptor();

Sentry.init(SENTRY_CONFIG);

const SecuredRoutes = () => {
	const isMobile = hooks.useCheckMobileScreen();
	const [corsErrorModalOpen, setCorsErrorModalOpen] = useState(false);
	const [authRequiredModalOpen, setAuthRequiredModalOpen] = useState(false);
	const LayoutComponent = useMemo(
		() => (isMobile ? Components.TabBarLayout : Components.SidebarLayout),
		[isMobile]
	);

	const history = useHistory();
	const restoreOriginalUri = async (_oktaAuth, originalUri) => {
		history.replace(
			toRelativeUrl(originalUri || '/', window.location.origin)
		);
	};

	const triggerLogin = () => {
		// Redirect to the /login page that has a CustomLoginComponent
		history.push('/login');
	};

	const customAuthHandler = async () => {
		const previousAuthState =
			oktaAuth.authStateManager.getPreviousAuthState();
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
			<Context.DeviceContext.Provider value={isMobile}>
				<Context.SocketContext.Provider value={Context.socket}>
					<Provider store={store}>
						<Suspense
							fallback={
								<Spin
									className="spinWrapper"
									size="large"
								/>
							}>
							<Security
								oktaAuth={oktaAuth}
								onAuthRequired={customAuthHandler}
								restoreOriginalUri={restoreOriginalUri}>
								<CorsErrorModal
									{...{ corsErrorModalOpen, setCorsErrorModalOpen }}
								/>
								<AuthRequiredModal
									{...{
										authRequiredModalOpen,
										setAuthRequiredModalOpen,
										triggerLogin
									}}
								/>
								<Switch>
									<Route
										path={ROUTES.LOGIN_REDIRECT_PATH}
										component={(props) => (
											<LoginCallback
												{...props}
												onAuthResume={onAuthResume}
											/>
										)}
									/>
									<Route
										path={ROUTES.LOGIN}
										component={Components.Login}
									/>
									<Route
										path={ROUTES.SIGN_UP}
										component={SignUp}
									/>
									<Route
										path={SECURED_ROUTES.map(
											(route) => route?.path
										)}>
										<LayoutComponent>
											{SECURED_ROUTES?.filter(
												(securedRoute) =>
													!securedRoute?.menubarOnly
											)?.map((securedRoute, index) => (
												<SecureRoute
													exact={securedRoute?.exact}
													key={index}
													path={securedRoute?.path}
													component={securedRoute?.component}
												/>
											))}
										</LayoutComponent>
									</Route>
									<Redirect
										from="/"
										to={ROUTES.HOME}
									/>
								</Switch>
							</Security>
						</Suspense>
					</Provider>
				</Context.SocketContext.Provider>
			</Context.DeviceContext.Provider>
		</Sentry.ErrorBoundary>
	);
};

export default SecuredRoutes;
