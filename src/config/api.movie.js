import * as axios from 'axios';

export const apiMovie = axios.create();

apiMovie.interceptors.request.use((req) => {
  req.headers['Authorization'] =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODQyMzgwZTdlNzVjMTY3NTQxNTU0MzlkMDExMTU3MyIsInN1YiI6IjYxOTYwN2JiYTBmMWEyMDA0MmRkMGY2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vf0GRvu5p5-1Xe4qqyzXpZxmZAqxtkmV01njzPvXnpQ';
  return req;
});

export const apiMovieMap = (m) => ({
  img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
  title: m.title,
  details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
  description: m.overview,
});

const ApiMovie = {
  searchMovies: (filter) => {
    const query =
      '?' +
      Object.keys(filter)
        .map((k) => `${k}=${filter[k]}&`)
        .join('');
    return apiMovie
      .get('/search/movie' + query)
      .then((response) => response.data.results)
      .then((moviesApi) =>
        moviesApi.filter((m) => m.poster_path).map(apiMovieMap)
      );
  },
};
export default ApiMovie;
