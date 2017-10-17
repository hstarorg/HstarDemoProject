import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);
const routes = [

];

export function createRouter() {
  return new Router({
    mode: 'history',
    routes
  });
};
