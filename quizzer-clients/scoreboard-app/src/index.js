import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { mainReducer } from './reducers/mainReducer';

import thunkMiddleware from 'redux-thunk';

import { App } from './components/App';
import * as serviceWorker from './serviceWorker';

const logger = (thestore) => (next) => (action) => {
  // console.log('ACTION:', action.type, action);
  let result = next(action);
  // console.log('STATE AFTER ACTION:', action.type, store.getState());
  return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
export const theStore = Redux.createStore(mainReducer, composeEnhancers(
  Redux.applyMiddleware(logger, thunkMiddleware)
));

const mainComponent =
  <ReactRedux.Provider store={theStore}>
    <App/>
  </ReactRedux.Provider>

ReactDOM.render( mainComponent, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();