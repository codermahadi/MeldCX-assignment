import React, {Component} from 'react';
import Login from "../pages/login";
import {useCookies} from "react-cookie";

const withAuth = (Component: any) => {
    const Auth = () => {
        const [cookies, setCookie, removeCookie] = useCookies(['user']);

        // If user is not logged in, return login component
        if (!cookies.user) {
            return (
                <Login/>
            );
        }

        // If user is logged in, return original component
        return (
            <Component />
        );
    };

    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
};

export default withAuth;
