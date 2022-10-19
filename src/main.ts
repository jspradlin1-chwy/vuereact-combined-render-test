import React from 'react';
import { createRoot } from 'react-dom/client';
import Vue from 'vue';
import { ReactOnlyApp } from './react-only/react-only-app.component';
import {store} from './vue-only/vuex-store';
import VueOnlyApp from './vue-only/VueOnlyApp.vue';
import { ReactVuexApp } from './vuex-in-react/react-vuex-app.component';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(VueOnlyApp),
  components: {VueOnlyApp},
  template: '<VueOnlyApp/>',
}).$mount('#vue-only-app');

const reactRoot = createRoot(document.querySelector('#react-only-app'));

reactRoot.render(React.createElement(ReactOnlyApp))

const reactVuexRoot = createRoot(document.querySelector('#react-in-vue-app'));

reactVuexRoot.render(React.createElement(ReactVuexApp))