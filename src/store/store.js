import { createStore } from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

const store = createStore({
  state: {
    counter: ""
  },
  mutations: {
    updateField,
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    reset(state) {
      state.counter = "";
    }
  },
  getters: {
    getField,
    counter: (state) => state.counter
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    },
    reset({ commit }) {
      commit('reset');
    }
  }
})

export default store;