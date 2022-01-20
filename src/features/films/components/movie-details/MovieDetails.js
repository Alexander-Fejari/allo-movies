import React, { Component } from 'react';

export default class MovieDetails extends Component {
  render() {
    return (
      <div className='w-25 bg-light p-4 pt-2 d-flex flex-column position-relative'>
        {this.props.movie ? (
          <>
            <div className='position-sticky top-0'>
              <h5 className='pt-2'>{this.props.movie.title}</h5>
              <hr className='w-100' />
              <div>
                <img
                  className='d-block mx-auto'
                  width='300'
                  height='auto'
                  src={this.props.movie.img}
                  alt={this.props.movie.title}
                />
              </div>
              <hr className='w-100' />
              <span className='text-secondary'>{this.props.movie.details}</span>
              <br />
              <span>{this.props.movie.description}</span>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}
