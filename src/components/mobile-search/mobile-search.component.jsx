import React, { useState, useRef } from "react";
import { Row, Col, InputGroup } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { connect } from 'react-redux';
import { fetchMoviesAsync } from "/redux/movies/movies.actions";
import _ from "lodash";


import './mobile-search.styles';

const MobileSearch = ({ dispatch }) => {
    const [movieQuery, setMovieQuery] = useState('');
    const delayedQuery = useRef(_.debounce(q => dispatch(fetchMoviesAsync(q)), 500)).current;

    const handleChange = e => {
        setMovieQuery(e.target.value);
        delayedQuery(e.target.value);
    };

    return (
        <Row className="d-block d-sm-none">
            <Col>
                <InputGroup>
                    <span className="input-group-addon transparent"><FaSearch className="search-icon" /></span>
                    <input className="form-control" onChange={handleChange} value={movieQuery}
                        placeholder="Search Now" type="text" name="search" />
                </InputGroup>
            </Col>
        </Row>
    );
};

export default connect()(MobileSearch);