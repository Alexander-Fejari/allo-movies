import movies from './films/movies.reducers';
import favoris from './favoris/favoris.reducers';
/*{
    movie: {
        data: [],
        selectedMovie: 0,
        isLoading: false
        error: null
    },
    favoris: {
        data: [],
        isLoading: false
        error: null
    }
}*/

const Reducers = {
  movies,
  favoris,
};

export default Reducers;
