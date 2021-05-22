import Vue from 'vue';
import VueModal from '@kouts/vue-modal';
import App from './App.vue';
import router from './router';
import store from './store';

import '@kouts/vue-modal/dist/vue-modal.css';

Vue.config.productionTip = false;
Vue.component('Modal', VueModal);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
