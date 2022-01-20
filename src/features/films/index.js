import React from 'react';
import { MovieList, MovieDetails, SearchBar } from './components';
import Loading from '../../components/utils/Loading';
import { connect } from 'react-redux';
import {
  favorisListNameSelector,
  moviesIsLoadingSelector,
  moviesListSelector,
  moviesSelectedMovieSelector,
} from '../../store/selectors';
import {
  fetchMovies,
  tryAddFavori,
  tryRemoveFavori,
  setSelectedMovie,
} from '../../store/actions';

const Films = (props) => {
  return (
    <>
      <SearchBar fetchMovies={props.fetchMovies} />
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className='d-flex flex-row flex-fill pt-4 p-2'>
          <MovieList
            movies={props.movies}
            updateSelectedMovie={props.setSelectedMovie}
            favoris={props.favorisListName}
            removeFavori={props.tryRemoveFavori}
            addFavori={props.tryAddFavori}
          />
          <MovieDetails movie={props.selectedMovie} />
        </div>
      )}
    </>
  );
};

export default connect(
  (state) => ({
    isLoading: moviesIsLoadingSelector(state),
    movies: moviesListSelector(state),
    favorisListName: favorisListNameSelector(state),
    selectedMovie: moviesSelectedMovieSelector(state),
  }),
  {
    fetchMovies,
    setSelectedMovie,
    tryAddFavori,
    tryRemoveFavori,
  }
)(Films);
