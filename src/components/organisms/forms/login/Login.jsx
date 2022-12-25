import React, { useState } from 'react';
import { useForm } from 'antd/lib/form/Form';
import { useOktaAuth } from '@okta/okta-react';

import Form from '../../form';
import { getError } from '../helpers';
import styles from './login.module.scss';
import Molecules from '../../../molecules';
import PublicHeader from '../../publicHeader';

const Login = () => {
	const [form] = useForm();
	const { oktaAuth } = useOktaAuth();
	const [sessionToken, setSessionToken] = useState(null);
	const [error, setError] = useState({ hasError: false, message: '' });
	const [loading, setLoading] = useState(false);

	const onSubmit = (formData) => {
		setLoading(true);
		const data = {
			username: formData.email,
			password: formData.password
		};

		oktaAuth
			.signInWithCredentials(data)
			.then((res) => {
				const sessionToken = res.sessionToken;
				if (!sessionToken) {
					throw new Error('authentication process failed');
				}
				setSessionToken(sessionToken);
				oktaAuth.signInWithRedirect({
					originalUri: '/home',
					sessionToken: sessionToken
				});
			})
			.catch((err) => {
				let errorMessage = getError(err?.errorCode, err?.errorSummary);
				setError((error) => ({
					hasError: true,
					message: errorMessage ?? error?.message
				}));
			})
			.finally(() => setLoading(false));
	};
	if (sessionToken) return <div />;

	return (
		<div className={styles.publicBg}>
			<PublicHeader />
			<Form
				ariaLabel="Login"
				error={error}
				form={form}
				id="login-form"
				initialValues={{
					['email']: 'guest@xplay.com',
					['password']: 'Secure123'
				}}
				loading={loading}
				name="login-form"
				onSubmit={onSubmit}
				submitLabel="Login"
				wrapperClass={styles.form}>
				<Molecules.FormField
					id="email"
					label="Email Address"
					name="email"
					placeholder="Enter email address"
					rules={[
						{
							required: true,
							message: `Please enter your email!`
						},
						{
							type: 'email',
							message: 'The input is not valid E-mail!'
						}
					]}
				/>
				<Molecules.FormField
					id="password"
					label="Password"
					name="password"
					placeholder="Enter password"
					rules={[
						{
							required: true,
							message: `Please enter your password!`
						}
					]}
					type="password"
				/>
			</Form>
		</div>
	);
};
export default Login;
