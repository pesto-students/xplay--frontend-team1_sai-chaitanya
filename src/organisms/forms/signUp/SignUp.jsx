import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Form } from "../../form";
import { FormField } from "../../../molecules";
import { PublicHeader } from "../../publicHeader";
import { API_BASE_URL, ENDPOINTS } from "../../../constants";

const SignUp = () => {
    const history = useHistory();

    const onSubmit = (formData) => {
        try {
            const response = axios.post(`${API_BASE_URL}/${ENDPOINTS.SIGN_UP}`, formData);
            console.log({ response });
            if (response?.data?.error) {
                console.error(response?.data?.message);
            } else {
                console.log(response?.data?.message);
                history.push('/login');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <PublicHeader />
            <Form
                ariaLabel="Sign Up"
                id="signup-form"
                name="signup-form"
                onSubmit={onSubmit}
                submitLabel="Sign Up"
            >
                <FormField
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    placeholder="Enter firstname"
                />
                <FormField
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter lastname"
                />
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

export default SignUp;
