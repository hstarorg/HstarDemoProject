import App from './App.vue';

var store = new Vuex.Store({
  state: {
    a: 1,
    b: 2,
    c: 3
  },
  mutations: {
    ['CHANGE_STATE'](state, payload) {
      Object.assign(state, payload);
    }
  }
});

try {
  // 尝试还原State
  let state = JSON.parse(sessionStorage.getItem('app_state'));
  if (state && Object.keys(state).length > 0) {
    store.replaceState(state);
  }
} catch (e) {}

const vm = new Vue({
  el: '#app',
  store,
  render: h => h(App)
});

window.addEventListener('beforeunload', function (e) {
  // 关闭或刷新时，保存State
  var currentState = Object.assign({}, vm.$store.state);
  sessionStorage.setItem('app_state', JSON.stringify(currentState));
}, false);
