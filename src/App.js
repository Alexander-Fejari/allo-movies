import React, { Component, lazy, Suspense } from 'react';
import { Header } from './components';
import { fetchFavoris, discoverMovies } from './store/actions';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const LazyFilms = lazy(() =>
  import('./features/films' /*webpackChunkName: "Films" */)
);

const LazyFavoris = lazy(() =>
  import('./features/favoris' /*webpackChunkName: "Favoris" */)
);

class App extends Component {
  componentDidMount() {
    this.props.fetchFavoris();
    this.props.discoverMovies();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Switch>
            <Route path='/films' component={LazyFilms} />
            <Route path='/favoris' component={LazyFavoris} />
            <Redirect to='/films' />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(
  connect(null, {
    fetchFavoris,
    discoverMovies,
  })(App)
);
