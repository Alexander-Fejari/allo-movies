import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <header className='navbar navbar-expand-lg navbar-light bg-light'>
        <nav className='container-fluid'>
          <a className='navbar-brand' href='/'>
            Allo-Movie
          </a>
          <button className='navbar-toggler'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  activeClassName='active'
                  to='/films'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  activeClassName='active'
                  to='/favoris'
                >
                  Favoris
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
