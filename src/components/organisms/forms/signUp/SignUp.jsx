import React, { useEffect } from 'react';
import { useForm } from 'antd/lib/form/Form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../../form';
import hooks from '../../../../hooks';
import styles from './signup.module.scss';
import Molecules from '../../../molecules';
import PublicHeader from '../../publicHeader';
import { userThunk } from '../../../../redux';

const SignUp = () => {
	const [form] = useForm();
	const history = useHistory();
	const dispatch = useDispatch();
	const notificationKey = 'signUp';
	const { notify } = hooks.useNotifications();
	const { error, loading, signUpSuccess } = useSelector((state) => state?.user);

	useEffect(() => {
		if (signUpSuccess) {
			history.push('/login');
			notify(
				'User created successfully, please login with your creadentials now!',
				notificationKey
			);
		}
	}, [signUpSuccess])

	const onSubmit = async (formData) => {
		notify('Signing up', notificationKey, 'loading');
		dispatch(userThunk.createUserThunk(formData));
	};

	return (
		<div className={styles.publicBg}>
			<PublicHeader />
			<Form
				ariaLabel="Sign Up"
				error={error}
				form={form}
				id="signup-form"
				loading={loading}
				name="signup-form"
				onSubmit={onSubmit}
				submitLabel="Sign Up"
				wrapperClass={styles.form}>
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
