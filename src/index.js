import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
