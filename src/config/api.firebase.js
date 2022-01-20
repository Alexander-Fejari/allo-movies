import * as axios from 'axios';

export const apiFirebase = axios.create({
  baseURL:
    'https://allo-movie-65c0d-default-rtdb.europe-west1.firebasedatabase.app/',
});

export const apiHelper = {
  fetchFavoris: () =>
    apiFirebase
      .get('favoris.json')
      .then((response) => (response.data ? response.data : [])),
  saveFavoris: (favoris) => apiFirebase.put('favoris.json', favoris),
};

export default apiHelper;
