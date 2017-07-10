import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './../../App'
import { routes } from './routes'

Vue.use(VueRouter)


const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
