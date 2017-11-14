import App from './App';
import Vue from 'vue';
import { createRouter } from './createRouter';
import { createStore } from './createStore';

export function createApp(context) {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });
  return { app, router, store };
};
