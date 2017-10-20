import App from './pages/App.vue';
import router from './router';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
