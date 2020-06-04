import React from 'react';
import logo from '/assets/images/logo.png';
import { Link } from "react-router-dom";

const SignUp = () => {

    return (
        <>
            <div className="brand-wrapper">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="auth-wrapper my-auto">
                <h1 className="auth-title">This is only a demo to be hired for DigitalOnUs</h1>
                <Link to={'/auth'} className="auth-link">Please go back =)</Link>
            </div>
        </>
    )
}

export default SignUp;