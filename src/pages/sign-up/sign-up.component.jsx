import React from 'react';
import logo from '/assets/images/logo.png';
import { Link } from "react-router-dom";
import { SignUpTitle } from './sign-up.styles';

const SignUp = () => {

    return (
        <>
            <div className="brand-wrapper">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="auth-wrapper my-auto">
                <SignUpTitle>This is only a demo to be hired for DigitalOnUs</SignUpTitle>
                <Link to={'/auth'} className="auth-link">Please go back =)</Link>
            </div>
        </>
    )
}

export default SignUp;