import * as actions from './favoris.actions';

const FavorisReducer = (
  state = {
    data: [],
    isLoading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actions.FETCH_FAVORIS_SUCCESS: {
      return {
        ...state,
        data: action.favoris,
        isLoading: false,
        error: null,
      };
    }
    case actions.FETCH_FAVORIS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case actions.REMOVE_FAVORI_SUCCESS:
    case actions.ADD_FAVORI_SUCCESS: {
      return {
        ...state,
        data: action.favoris,
        error: null,
      };
    }
    case actions.REMOVE_FAVORI_ERROR:
    case actions.ADD_FAVORI_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default FavorisReducer;
