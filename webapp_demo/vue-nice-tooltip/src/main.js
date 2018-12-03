import Vue from 'vue';
import PortalVue from 'portal-vue';

import App from './App.vue';
import NiceTooltip from './components/vue-nice-tooltip.vue';

Vue.use(PortalVue);
Vue.component('nice-tooltip', NiceTooltip);

new Vue({
  el: '#app',
  render: h => h(App)
});
