import Vue from 'vue';
import App from './App';

import router from './config/vuerouter/router';
import store from './config/vuex/store';
import resources from './config/vueresource/config'

new Vue({
  router,
  store,
  ...App
}).$mount('#app');
