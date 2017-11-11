import App from './pages/App';
import { Provider } from 'react-redux';
import React from 'react';

export const createApp = (store) => (
  <Provider store={store}>
    <App />
  </Provider>
);
