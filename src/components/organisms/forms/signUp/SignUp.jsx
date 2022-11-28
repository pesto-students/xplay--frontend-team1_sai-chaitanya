import React, { useState } from 'react';
import axios from 'axios';
import { message as notify } from 'antd';
import { useHistory } from 'react-router-dom';

import Form from '../../form';
import { getError } from '../helpers';
import styles from './signup.module.scss';
import Molecules from '../../../molecules';
import PublicHeader from '../../publicHeader';
import { API_BASE_URL, ENDPOINTS } from '../../../../constants';

const SignUp = () => {
	const key = 'signupKey';
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({ hasError: false, message: '' });

	const openMessage = (description, type = 'success') => {
		notify?.[type]({
			content: description,
			key
		});
	};

	const onSubmit = async (formData) => {
		openMessage('Signing up', 'loading');
		setLoading(true);
		try {
			await axios.post(`${API_BASE_URL}/${ENDPOINTS.SIGN_UP}`, formData);
			history.push('/login');
			openMessage(
				'User created successfully, please login with your creadentials now!'
			);
		} catch (err) {
			if (err?.response?.data?.data) {
				const error = err?.response?.data?.data;
				const errorCode = error?.errorSummary?.includes('login:')
					? error?.errorCode
					: 'original';
				let errorMessage = getError(errorCode, error?.errorSummary);
				setError(() => ({ hasError: true, message: errorMessage }));
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={styles.publicBg}>
			<PublicHeader />
			<Form
				ariaLabel="Sign Up"
				error={error}
				id="signup-form"
				loading={loading}
				name="signup-form"
				onSubmit={onSubmit}
				submitLabel="Sign Up">
				<Molecules.FormField
					id="firstName"
					label="First Name"
					name="firstName"
					placeholder="Enter firstname"
					rules={[
						{
							required: true,
							message: `Please enter your first name!`
						}
					]}
				/>
				<Molecules.FormField
					id="lastName"
					label="Last Name"
					name="lastName"
					placeholder="Enter lastname"
					rules={[
						{
							required: true,
							message: `Please enter your last name!`
						}
					]}
				/>
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

export default SignUp;
