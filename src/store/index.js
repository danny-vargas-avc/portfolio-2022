import { createStore } from 'vuex';

export default createStore({
  state: {
    currentProject: null,
  },
  mutations: {
    SET_PROJECT(state, value) {
      state.currentProject = value;
    },
  },
  actions: {
    setProject({ commit }, code) {
      console.log('action dispatch');
      commit('SET_PROJECT', code);
    },
  },
});