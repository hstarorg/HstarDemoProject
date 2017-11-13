import * as pages from './pages';

export default {
  path: 'product', component: pages.Layout, children: [
    { path: 'page21', component: pages.Page21 },
    { path: 'page22', component: pages.Page22 }
  ]
};
