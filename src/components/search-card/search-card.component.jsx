import React, { useRef, useState } from "react";
import { FaSearch, FaCalendar } from "react-icons/fa";
import { InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchMoviesAsync } from "/redux/movies/movies.actions";
import _ from "lodash";

import './search-card.styles';

const SearchCard = ({ dispatch }) => {
    const [movieQuery, setMovieQuery] = useState('');
    const delayedQuery = useRef(_.debounce(q => dispatch(fetchMoviesAsync(q)), 500)).current;

    const handleChange = e => {
        setMovieQuery(e.target.value);
        delayedQuery(e.target.value);
    };


    return (
        <div className="card search-card">
            <div className="card-block search-content">
                <InputGroup>
                    <span className="input-group-addon transparent"><FaSearch className="search-icon" /></span>
                    <input className="form-control left-border-none" onChange={handleChange} value={movieQuery}
                        placeholder="Search Now" type="text" name="search" />
                </InputGroup>
                <InputGroup className="search-calendar">
                    <span className="input-group-addon transparent"><FaCalendar className="search-icon" /></span>
                    <input className="form-control left-border-none" placeholder="MM/DD/YYYY" type="text" name="calendar" />
                </InputGroup>
            </div>
        </div>
    );
};

export default connect()(SearchCard);