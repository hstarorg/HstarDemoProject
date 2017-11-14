import About from '@/pages/about/About';
import HelloWorld from '@/components/HelloWorld';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/about', component: About }
];

export function createRouter() {
  return new Router({
    mode: 'history',
    routes
  });
}
