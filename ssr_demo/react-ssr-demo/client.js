import 'babel-polyfill';

import { Provider, connect } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import App from './src/pages/App';
import React from 'react';
import { render } from 'react-dom';

// const preloadedState = window.__PRELOADED_STATE__;
const initialState = {
  name: 'Jay'
};

const store = createStore((state, action) => {
  return state;
}, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
