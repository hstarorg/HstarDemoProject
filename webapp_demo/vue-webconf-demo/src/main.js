import Vue from 'vue';
import { App } from './pages';

import XXXUI from '../xxx-ui';
Vue.use(XXXUI);

Vue.config.productionTip = false;

import { router } from './router.config';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
