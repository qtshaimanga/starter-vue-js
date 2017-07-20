import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './../../App'
import { routes } from './routes'
import config from './../index'

Vue.use(VueRouter)


const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
});

router.beforeEach((to, from, next) => {

  let auth = JSON.parse(localStorage.getItem('auth'));

  if( config.auth != true || auth != null && auth.success === true || to.name == "authentification" ){

    next()

  }else{

    next({ path: '/' })

  }

})

export default router;
