import { createStore } from 'redux';

const initialState = {
  name: 'Jay'
};

export const createAppStore = () => {
  let defaultState = initialState;
  if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    defaultState = window.__INITIAL_STATE__;
  }
  return createStore((state, action) => {
    return state;
  }, defaultState);
};
