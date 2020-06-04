import React from "react";
import { FaStar } from 'react-icons/fa';
import './digital-card.styles';
import { BASE_IMG_URL } from '/utils/globals';

const DigitalCard = ({ movie, selectMovie }) => {

    return (
        <div className="card flex-row flex-wrap digital-card" onClick={() => selectMovie ? selectMovie(movie): null}>
            <img className="digital-img" src={movie.poster_path
                ? `${BASE_IMG_URL}${movie.poster_path}`
                : '//placehold.it/200'} alt="image" />
            <div className="card-block digital-content" >
                <h4 className="card-title">{movie.original_title}</h4>
                <p className="card-text">Release date: {movie.release_date}</p>
                <p>{movie.overview}</p>
                <div className="footer-label"><FaStar /> {movie.vote_average}</div>
            </div>
        </div>
    );
};

export default DigitalCard;