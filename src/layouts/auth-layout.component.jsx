import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { selectAuthUser } from "/redux/user/user.selectors";
import { Container } from "react-bootstrap";

import SignIn from '/pages/sign-in/sign-in.component';
import SignUp from '/pages/sign-up/sign-up.component';

/* styles */
import './auth-layout.styles.scss';
import backgroundImage from '../assets/images/auth.jpg';

const AuthLayout = ({ user }) => {
    return (
        <Container fluid>
            <Row>
                <Col sm={6} className="auth-section-wrapper">
                    <Switch>
                        <Route path={'/auth'} exact render={() => user
                            ? (<Redirect to='/admin' />)
                            : (<SignIn />)}>
                        </Route>
                        <Route path={'/auth/sign-up'} render={() => user
                            ? (<Redirect to='/admin' />)
                            : (<SignUp />)}>
                        </Route>
                    </Switch>
                </Col>
                <Col sm={6} className="px-0 d-none d-sm-block">
                    <img src={backgroundImage} alt="login image" className="auth-img" />
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = state => ({
    user: selectAuthUser(state)
});

export default connect(mapStateToProps)(AuthLayout);