import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    var1: 0,
    var2: 0,
    var3: 0,
    vueOnlyLog: [],
  }
})