import React, { Component } from 'react';
import FavoriElement from './favori-element/FavoriElement';
import Style from './FavorisList.module.scss';

export default class FavoriList extends Component {
  render() {
    return (
      <>
        <div className={Style.container}>
          <h3>Favorite List</h3>
          <div className={'wrapper__favoris col-12 '}>
            {this.props.favoris.map((f, index) => (
              <FavoriElement
                key={f.title + index}
                favori={f}
                removeFavori={() => this.props.removeFavori(f.title)}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
