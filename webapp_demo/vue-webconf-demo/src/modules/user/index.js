import * as pages from './pages';

export default {
  path: 'user', component: pages.Layout, children: [
    { path: 'page11', component: pages.Page11 },
    { path: 'page12', component: pages.Page12 }
  ]
};
