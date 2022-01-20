import React from 'react';
import { FavoriList } from './components';
import Loading from '../../components/utils/Loading';
import { connect } from 'react-redux';
import {
  favorisListSelector,
  favorisIsLoadingSelector,
} from '../../store/selectors';
import { tryRemoveFavori } from '../../store/actions';

const Favoris = (props) => {
  return (
    <div className='d-flex flex-row flex-fill pt-4 p-2'>
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className='d-flex flex-row flex-fill pt-4 p-2'>
          <FavoriList
            favoris={props.favoris}
            removeFavori={props.tryRemoveFavori}
          />
        </div>
      )}
    </div>
  );
};

export default connect(
  (state) => ({
    favoris: favorisListSelector(state),
    isLoading: favorisIsLoadingSelector(state),
  }),
  {
    tryRemoveFavori,
  }
)(Favoris);
