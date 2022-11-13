import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";

import { Form } from "../../form";
import { FormField } from "../../../molecules";
import { PublicHeader } from "../../publicHeader";

const Login = () => {
    const { oktaAuth } = useOktaAuth();
    const [sessionToken, setSessionToken] = useState(null);

    const onSubmit = (formData) => {
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
            .catch((err) => console.log("handle error here", err));
    };

    if (sessionToken) return <div />;

    return (
        <>
            <PublicHeader />
            <Form
                ariaLabel="Login"
                id="login-form"
                name="login-form"
                onSubmit={onSubmit}
                submitLabel="Login"
            >
                <FormField
                    id="email"
                    label="Email Address"
                    name="email"
                    placeholder="Enter email address"
                />
                <FormField
                    id="password"
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    type="password"
                />
            </Form>
        </>
    );
}
export default Login;
