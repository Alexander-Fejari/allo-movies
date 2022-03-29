import React, { Component } from 'react';

export default class MovieDetails extends Component {
  render() {
    return (
      <div className='wrapper__details col-lg-4'>
        {this.props.movie ? (
          <>
            <div>
              <h3>{this.props.movie.title}</h3>
              <hr />
              <div>
                <img
                  className='d-block mx-auto'
                  src={this.props.movie.img}
                  alt={this.props.movie.title}
                />
              </div>
              <hr className='w-100' />
              <p>{this.props.movie.details}</p>
              <p>{this.props.movie.description}</p>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}
