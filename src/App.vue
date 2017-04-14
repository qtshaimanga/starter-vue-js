<template>
  <div class="app">
    <transition name="fade" appear>
      <loader v-show="getLoaderDisplayerState"></loader>
    </transition>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import throttle from 'lodash.throttle';
import _ from 'underscore';
import MobileDetect from 'mobile-detect';


import Loader from './components/Loader';

import { mapActions, mapGetters } from 'vuex';


export default {
  name: 'app',
  components: {
    Loader,
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getLoaderDisplayerState'])
  },
  created () {
    this.creditsLog();
    this.resizer();
    this.mobileDetect();
  },
  mounted (){
  },
  methods:{
    ...mapActions(['setUpdateSizeState','setMobileState']),
    creditsLog() {
     /*eslint-disable */
     console.log('%c', 'background: #ffffff; font-size: 11px; color: #f0f0f0');
     console.log('%c > Portfolio: https://quentintshaimanga.fr', 'background: #2c3e50; padding:5px; font-size: 11px; color: #ffffff');
     console.log('%c > Linkedlin: https://fr.linkedin.com/in/quentin-tshaimanga-946a5a10b', 'background: #2c3e50; padding:5px; font-size: 11px; color: #ffffff');
     console.log('%c > Twitter: https://twitter.com/quentin_tshmga', 'background: #2c3e50; padding:5px; font-size: 11px; color: #ffffff');
     console.log('%c', 'background: #ffffff; font-size: 11px; color: #f0f0f0');
     /*eslint-enable */
    },
     resizer () {
      var that = this;
      var throttled =  _.throttle(resized, 60, { 'trailing': false })
      var resize = window.addEventListener("resize", () => {
        throttled();
      });
       var resized = () => {
        that.setUpdateSizeState(true);
      }
    },
    mobileDetect () {
       var userAgent = window.navigator.userAgent
       var md = new MobileDetect(userAgent);
       if(md.mobile() != null){
         this.setMobileState(md);
       }
    }
  }
}
</script>

<style lang="scss">
  html{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  body{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  #app {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  .app{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
</style>
