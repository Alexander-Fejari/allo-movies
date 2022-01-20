import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ThunkMiddleware from 'redux-thunk';

const appReducer = combineReducers(reducers);

const middlewares = [ThunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
