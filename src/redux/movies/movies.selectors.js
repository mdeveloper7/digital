import { createSelector } from 'reselect';

const selectMovie = state => state.movie;

export const selectIsFetching = createSelector(
  [selectMovie],
  movie => movie.isFetching
);

export const selectMoviesList = createSelector(
  [selectMovie],
  movie => movie.movies
);
