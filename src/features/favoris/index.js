import React from 'react';
import { FavoriList } from './components';
import Loading from '../../components/utils/Loading';
import { connect } from 'react-redux';
import {
  favorisListSelector,
  favorisIsLoadingSelector,
} from '../../store/selectors';
import { tryRemoveFavori } from '../../store/actions';

const Favoris = props => {
  return (
    <div className='container-fluid'>
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className='row'>
          <div className='wrapper'>
            <FavoriList
              favoris={props.favoris}
              movies={props.movie}
              removeFavori={props.tryRemoveFavori}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(
  state => ({
    favoris: favorisListSelector(state),
    isLoading: favorisIsLoadingSelector(state),
  }),
  {
    tryRemoveFavori,
  }
)(Favoris);
