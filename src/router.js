import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Start from './containers/Start'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name : 'home',
    component: Start
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
