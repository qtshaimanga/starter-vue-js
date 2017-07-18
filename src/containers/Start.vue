<template>
  <div class="start" v-if="!getLoaderDisplayerState">
    <transition name="fade" mode="out-in" appear>
      <div>
        <started></started>
        <yolo></yolo>
        <login></login>
      </div>
    </transition>
  </div>
</template>

<script>
import Started from '../components/Started';
import Yolo from '../components/Yolo';
import Login from '../components/authentification/Login'

import { mapGetters } from 'vuex';

export default {
  name: 'start',
  components: {
    Started,
    Yolo,
    Login
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getLoaderDisplayerState'])
  },
	mounted () {
    console.log("app started");

  },
  methods:{
    login: function(){
      console.log("login");
      // this.$http.post('api/login', {"_username": "quentin", "_password": "foo"}).then( (response) => {
      //     console.log(response);
      //   }, (error) => {
      //     console.log(error);
      // });
    },
    fetchPosts: function() {
      this.$http.get('api/protected_resource').then( (response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
      });
    }
  }
}
</script>

<style lang="stylus">
@import "~src/styles/app.styl"

  .start
    width 100%
    height 100%
    margin 0px
    padding 0px

</style>
