import Vue from 'vue';
import VueModal from '@kouts/vue-modal';
import App from './App.vue';
import router from './router';
import store from './store';

import '@kouts/vue-modal/dist/vue-modal.css';
import { makeServer } from './server';

Vue.config.productionTip = false;
Vue.component('Modal', VueModal);

makeServer();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
