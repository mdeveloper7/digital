import React from 'react';
import Sidebar from "/components/sidebar/sidebar.component";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Route } from 'react-router-dom';
import SearchCard from '/components/search-card/search-card.component';
import LabelCard from '/components/label-card/label-card.component';
import { Row, Col } from 'react-bootstrap';
import Main from '/pages/main/main.component';

/* styles */
import './admin-layout.styles.scss';

const AdminLayout = () => {
    return (
        <div id="main-content">
            <div className="flex-grid">
                <Sidebar />
                <section className="main">
                    <Row className="row-content">
                        <Col sm={12} md={8} className="card-data">
                        <Route path={'/admin'} >
                            <Main />
                        </Route>
                        </Col>
                        <Col md={4} className="d-none d-md-block d-lg-block">
                            <div className="right-data">
                                <SearchCard />
                                <LabelCard />
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        </div>
    );
}

export default AdminLayout;