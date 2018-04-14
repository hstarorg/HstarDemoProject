import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      isLogged: false
    },
    actions: {
      doLogin({ commit }, id) {
        return new Promise(resolve => {
          setTimeout(() => {
            console.log('call');
            commit('setLogged', true);
            resolve();
          }, 1000);
        });
      }
    },
    mutations: {
      setLogged(state, isLogged) {
        state.isLogged = isLogged;
      }
    }
  });
}
