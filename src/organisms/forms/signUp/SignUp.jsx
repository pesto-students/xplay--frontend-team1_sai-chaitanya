import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Form } from "../../form";
import { getError } from "../helpers";
import { FormField } from "../../../molecules";
import { PublicHeader } from "../../publicHeader";
import { API_BASE_URL, ENDPOINTS } from "../../../constants";
import { notification } from "antd";

const SignUp = () => {
    const history = useHistory();
    const [error, setError] = useState({ hasError: false, message: '' });
    const [loading, setLoading] = useState(false);

    const openNotificationWithIcon = (description, message = 'success', type = 'success') => {
        notification[type]({
            message: message,
            description: description,
        });
    };

    const onSubmit = async (formData) => {
        setLoading(true);
        try {
            await axios.post(`${API_BASE_URL}/${ENDPOINTS.SIGN_UP}`, formData);
            history.push('/login');
            openNotificationWithIcon('User created successfully, please login with your creadentials now!', 'Success');
        } catch (err) {
            if (err?.response?.data) {
                const error = err?.response?.data;
                const errorCode = error?.errorSummary?.includes('login:') ? error?.errorCode : 'original';
                let errorMessage = getError(errorCode, error?.errorSummary);
                setError(e => ({ hasError: true, message: errorMessage }));
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <PublicHeader />
            <Form
                ariaLabel="Sign Up"
                error={error}
                id="signup-form"
                loading={loading}
                name="signup-form"
                onSubmit={onSubmit}
                submitLabel="Sign Up"
            >
                <FormField
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    placeholder="Enter firstname"
                    rules={[
                        {
                            required: true,
                            message: `Please enter your first name!`,
                        }
                    ]}
                />
                <FormField
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter lastname"
                    rules={[
                        {
                            required: true,
                            message: `Please enter your last name!`,
                        }
                    ]}
                />
                <FormField
                    id="email"
                    label="Email Address"
                    name="email"
                    placeholder="Enter email address"
                    rules={[
                        {
                            required: true,
                            message: `Please enter your email!`,
                        }, {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        }
                    ]}
                />
                <FormField
                    id="password"
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    rules={[
                        {
                            required: true,
                            message: `Please enter your password!`,
                        }
                    ]}
                    type="password"
                />
            </Form>
        </>
    );
}

export default SignUp;
