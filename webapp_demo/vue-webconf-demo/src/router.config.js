import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as pages from './pages';
import { moduleRoutes } from './modules';

const routes = [
  {
    path: '', component: pages.Layout, children: [
      { path: '', component: pages.Home },
      { path: 'about', component: pages.About },
      ...moduleRoutes
    ]
  },
  { path: '*', component: pages.NotFound }
];

export const router = new VueRouter({
  routes
});


