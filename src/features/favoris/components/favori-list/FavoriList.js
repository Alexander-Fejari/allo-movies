import React, { Component } from 'react';
import FavoriElement from './favori-element/FavoriElement';

export default class FavoriList extends Component {
  render() {
    return (
      <div className='w-75 d-flex flex-row flex-wrap justify-content-center'>
        {this.props.favoris.map((f, index) => (
          <FavoriElement
            key={f.title + index}
            favori={f}
            removeFavori={() => this.props.removeFavori(f.title)}
          />
        ))}
      </div>
    );
  }
}
