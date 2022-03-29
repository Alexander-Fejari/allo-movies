import React, { Component } from 'react';
import Content from '../../../../../components/readMore/ReadMore';
import Style from './FavorisElement.module.scss';

export default class FavoriElement extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  render() {
    const { favori } = this.props;
    return (
      <div className={Style.container}>
        <div ref={this.wrapperRef} className={'bg-light card'}>
          <img className='card-img-top' alt='film' src={favori.img} />
          <div className={'card-body ' + Style['card-body']}>
            <h5 className='card-title'> {favori.title} </h5>
            <hr />
            <div className='card-text'>
              {favori.details}
              <Content description={favori.description} />
            </div>
            <div className={Style['card-cta']}>
              <button
                onClick={() => {
                  this.props.removeFavori();
                }}
                className='btn btn-small btn-danger'>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
