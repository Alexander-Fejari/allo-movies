import { createSelector } from 'reselect';

export const moviesSelector = (state) => state.movies;

export const moviesIsLoadingSelector = createSelector(
  [moviesSelector],
  (movies) => movies.IsLoading
);

export const moviesListSelector = createSelector(
  [moviesSelector],
  (movies) => movies.data
);

export const moviesSelectedMoviesIndexSelector = createSelector(
  [moviesSelector],
  (movies) => movies.selectedMovie
);

export const moviesSelectedMovieSelector = createSelector(
  [moviesListSelector, moviesSelectedMoviesIndexSelector],
  (moviesData, index) => moviesData[index]
);
