import MoviesActionTypes from './movies.types';

const INITIAL_STATE = {
  movies: null,
  isFetching: false
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true
      };
      case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movies: action.payload
      };
      case MoviesActionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default moviesReducer;
