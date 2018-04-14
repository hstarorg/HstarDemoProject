import Vue from 'vue';
import Router from 'vue-router';

import * as pages from './pages';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: pages.Layout,
    children: [{ path: '/', component: pages.Home }, { path: '/login', component: pages.Login }]
  }
];

export function createRouter() {
  return new Router({
    mode: 'history',
    routes
  });
}
