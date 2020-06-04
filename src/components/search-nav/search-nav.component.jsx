import React, { useState, useRef } from "react";
import { FaCaretRight, FaCaretDown, FaSearch } from "react-icons/fa";
import { connect } from 'react-redux';
import { fetchMoviesAsync } from "/redux/movies/movies.actions";
import _ from "lodash";

import './search-nav.styles';

const SearchNav = ({dispatch}) => {
    const [open, setOpen] = useState(false);
    const [movieQuery, setMovieQuery] = useState('');
    const delayedQuery = useRef(_.debounce(q => dispatch(fetchMoviesAsync(q)), 500)).current;

    const handleChange = e => {
        setMovieQuery(e.target.value);
        delayedQuery(e.target.value);
      };

    return (
        <>
            <div className="nav-link">Search Link
            <span className="nav-icon" onClick={() => setOpen(prevState => !prevState)}>
                    {
                        open ? <FaCaretDown /> : <FaCaretRight />
                    }
                </span>
            </div>
            {
                open &&
                <div className="nav-link">
                    <div className="input-group">
                        <input onChange={handleChange} className="form-control left-border-none" 
                        placeholder="Search Now" type="text" name="search" value={movieQuery} />
                        <span className="input-group-addon nav-icon">
                            <FaSearch/>
                        </span>
                    </div>
                </div>
            }
        </>
    );
};

export default connect()(SearchNav);