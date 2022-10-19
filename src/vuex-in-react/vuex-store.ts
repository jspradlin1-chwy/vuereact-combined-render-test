import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    var1: 0,
    var2: 0,
    var3: 0,
  },
  mutations: {
    incrementVar1: (state) => {
      state.var1 += 1;
    },
    incrementVar2: (state) => {
      state.var2 += 1;
    },
    incrementVar3: (state) => {
      state.var3 += 1;
    },
  }
})