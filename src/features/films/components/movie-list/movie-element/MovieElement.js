import React, { Component } from 'react';
import Content from '../../../../../components/readMore/ReadMore';
import Style from './MovieElement.module.scss';

export default class MovieElement extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }
  mouseEnter = () => {
    this.props.updateSelectedMovie(this.props.movie.title);
  };
  animationBounce = () => {
    const wrapper = this.wrapperRef.current;
    wrapper.classList.add('animate__animated', 'animate__bounce');
    wrapper.addEventListener('animationend', () => {
      wrapper.classList.remove('animate__animated', 'animate__bounce');
    });
  };

  render() {
    return (
      <div
        onClick={this.mouseEnter}
        ref={this.wrapperRef}
        className={'bg-light card ' + Style.container}>
        <img className='card-img-top' alt='film' src={this.props.movie.img} />
        <div className={'card-body ' + Style['card-body']}>
          <h5 className='card-title'>{this.props.movie.title}</h5>
          <hr />
          <div className='card-text'>
            <p>{this.props.movie.details}</p>
            <div>
              <Content description={this.props.movie.description} />
            </div>
          </div>
          <div className={Style['card-cta']}>
            {this.props.isFavori ? (
              <button
                onClick={() => {
                  this.props.removeFavori(this.props.movie.title);
                }}
                className='btn btn-small btn-danger'>
                Remove
              </button>
            ) : (
              <button
                onClick={() => {
                  this.props.addFavori(this.props.movie);
                  this.animationBounce();
                }}
                className='btn btn-small btn-primary'>
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
