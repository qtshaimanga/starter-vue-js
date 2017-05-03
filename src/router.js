import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Start from './containers/Start'
import Grid from './containers/Grid'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name : 'home',
    component: Start
  },
  {
    path: '/grid',
    name : 'grid',
    component: Grid
  }
];

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
