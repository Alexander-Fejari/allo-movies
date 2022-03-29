import apiFirebaseRequest from '../../config/api.firebase';

export const REQUEST_FAVORIS = 'request favoris';
export const FETCH_FAVORIS = 'fetch favoris';
export const FETCH_FAVORIS_SUCCESS = 'fetch favoris success';
export const FETCH_FAVORIS_ERROR = 'fetch favoris error';

export const TRY_ADD_FAVORI = 'try add favoris';
export const ADD_FAVORI_SUCCESS = 'add favoris success';
export const ADD_FAVORI_ERROR = 'add favoris error';

export const TRY_REMOVE_FAVORI = 'try remove favoris';
export const REMOVE_FAVORI_SUCCESS = 'remove favoris success';
export const REMOVE_FAVORI_ERROR = 'remove favoris error';

export const requestFavoris = () => ({
  type: REQUEST_FAVORIS,
});

export const fetchFavorisSuccess = favoris => ({
  type: FETCH_FAVORIS_SUCCESS,
  favoris,
});

export const fetchFavorisError = error => ({
  type: FETCH_FAVORIS_ERROR,
  error,
});

export const fetchFavoris = () => dispatch => {
  dispatch(requestFavoris());
  return apiFirebaseRequest.fetchFavoris().then(
    favoris => dispatch(fetchFavorisSuccess(favoris)),
    error => dispatch(fetchFavorisError(error))
  );
};

export const addFavoriSuccess = favoris => ({
  type: ADD_FAVORI_SUCCESS,
  favoris,
});

export const addFavoriError = error => ({
  type: ADD_FAVORI_ERROR,
  error,
});

export const tryAddFavori = movie => (disptach, getState) => {
  const favoris = [...getState().favoris.data, movie];
  return apiFirebaseRequest.saveFavoris(favoris).then(
    () => disptach(addFavoriSuccess(favoris)),
    error => disptach(addFavoriError(error))
  );
};

export const removeFavoriSuccess = favoris => ({
  type: REMOVE_FAVORI_SUCCESS,
  favoris,
});

export const removeFavoriError = error => ({
  type: REMOVE_FAVORI_ERROR,
  error,
});

export const tryRemoveFavori = title => (disptach, getState) => {
  const favoris = [...getState().favoris.data];
  const index = favoris.findIndex(f => f.title === title);
  favoris.splice(index, 1);
  return apiFirebaseRequest.saveFavoris(favoris).then(
    () => disptach(removeFavoriSuccess(favoris)),
    error => disptach(removeFavoriError(error))
  );
};
