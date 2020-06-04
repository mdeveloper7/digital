import MoviesActionTypes from './movies.types';
import { API_KEY } from '/utils/globals';
import axios from 'axios';

export const fetchMoviesStart = () => ({
  type: MoviesActionTypes.FETCH_MOVIES_START,
});

export const fetchMoviesAsync = (query) => {
  // space is changed by + the the api can recognize the request
  const fixedQuery = query ? (query.replace(/ /g, "+")) : "";
  return dispatch => {
    dispatch(fetchMoviesStart());
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${fixedQuery}`).then((response) => {
      dispatch(fetchMoviesSuccess(response.data.results));
    }, (error) => {
      dispatch(fetchMoviesError());
    });
  }
};

export const fetchMoviesSuccess = movies => ({
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies
});

export const fetchMoviesError = () => ({
  type: MoviesActionTypes.FETCH_MOVIES_FAILURE,
});