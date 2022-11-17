import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";

import { Form } from "../../form";
import { getError } from "../helpers";
import styles from "./login.module.scss";
import { FormField } from "../../../molecules";
import { PublicHeader } from "../../publicHeader";

const Login = () => {
    const { oktaAuth } = useOktaAuth();
    const [sessionToken, setSessionToken] = useState(null);
    const [error, setError] = useState({ hasError: false, message: '' });
    const [loading, setLoading] = useState(false);

    const onSubmit = (formData) => {
        setLoading(true);
        const data = {
            username: formData.email,
            password: formData.password,
        };

        oktaAuth
            .signInWithCredentials(data)
            .then((res) => {
                const sessionToken = res.sessionToken;
                if (!sessionToken) {
                    throw new Error("authentication process failed");
                }
                setSessionToken(sessionToken);
                oktaAuth.signInWithRedirect({
                    originalUri: "/home",
                    sessionToken: sessionToken,
                });
            })
            .catch((err) => {
                let errorMessage = getError(err?.errorCode, err?.errorSummary);
                setError(e => ({ hasError: true, message: errorMessage }));
            }).finally(() => setLoading(false));
    };

    if (sessionToken) return <div />;

    return (
        <div className={styles.publicBg}>
            <PublicHeader />
            <Form
                ariaLabel="Login"
                error={error}
                id="login-form"
                loading={loading}
                name="login-form"
                onSubmit={onSubmit}
                submitLabel="Login"
            >
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
        </div>
    );
}
export default Login;
