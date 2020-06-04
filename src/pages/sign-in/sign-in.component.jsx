import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import logo from '/assets/images/logo.png';
import { connect } from 'react-redux';
import { setAuthUser } from '/redux/user/user.actions';
import { Link } from "react-router-dom";

/**constants
/**@default */
const INITIAL_STATE_FORM = {
    /** @type {string} */
    email: '',
    /** @type {string} */
    password: '',
    /** @type {string} */
    errorMessage: ''
};

const SignIn = ({ dispatch }) => {
    const [form, setForm] = useState(INITIAL_STATE_FORM);

    const handleChange = event => {
        const { target: { name, value } } = event;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const signIn = () => {
        if (form.email === 'miguel@digital.com' && form.password === 'admin') {
            dispatch(setAuthUser(
                { email: form.email }
            ));
        } else {
            setForm(prevState => ({
                ...prevState,
                errorMessage: 'Invalid email and/or password'
            }));
        }
    }

    return (
        <>
            <div className="brand-wrapper">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="auth-wrapper my-auto">
                <h1 className="auth-title">Welcome</h1>
                <Form action="#!">
                    <Form.Group>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="email@example.com" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="form-control" placeholder="Enter your passsword" onChange={handleChange} />
                    </Form.Group>
                    <small className="error-message">{form.errorMessage}</small>
                    <Button name="login" id="login" className="btn-block form-btn" onClick={signIn}>Login</Button>
                </Form>
                <Link to={'/auth/sign-up'} className="auth-link">Create a new account</Link>
                <p className="login-wrapper-footer-text">To enter use this email and password
                    <br /><span className="bold">Email: miguel@digital.com</span>
                    <br /><span className="bold">Pass: admin</span>
                </p>
            </div>
        </>
    )
}

export default connect()(SignIn);