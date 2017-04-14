import Vue from 'vue';

import App from './App';
import router from './router';
import store from './store';

Vue.use(require('vue-resource'));

Vue.http.options.root = 'http://localhost:8080';

new Vue({
  router,
  store,
  ...App
}).$mount('#app');
