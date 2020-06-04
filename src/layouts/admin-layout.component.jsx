import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Main from '/pages/main/main.component';

/* styles */
import './auth-layout.styles.scss';

const AdminLayout = () => {
    return (
        <Container fluid>
            <Switch>
                <Route path={'/admin'}>
                    <Main />
                </Route>
            </Switch>
        </Container>
    );
}

export default AdminLayout;