import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import moviesReducer from './movies/movies.reducer';

export default combineReducers({
  user: userReducer,
  movie: moviesReducer
});
