<template>
  <div class="auth" v-if="!getLoaderDisplayerState">
    <transition name="fade" mode="out-in" appear>
      <div class="container">
        <login v-show="this.getAuthDisplayerState[0]"></login>
        <register v-show="this.getAuthDisplayerState[1]"></register>
        <logout v-show="this.getAuthDisplayerState[2]"></logout>
      </div>
    </transition>
  </div>
</template>

<script>
import Login from '../components/authentification/Login'
import Logout from '../components/authentification/Logout'
import Register from '../components/authentification/Register'

import { mapGetters, mapActions  } from 'vuex';

export default {
  name: 'auth',
  components: {
    Login,
    Logout,
    Register
  },
  data () {
    return {}
  },
  watch : {},
  computed: {
    ...mapGetters(['getLoaderDisplayerState', 'getAuthDisplayerState'])
  },
	mounted () {},
  methods:{
    ...mapActions({})
  }
}
</script>

<style lang="stylus">
@import "~src/styles/app.styl"

  .auth
    width 100%
    height 100%
    margin 0px
    padding 0px

    .container
      width 100%
      height 100%
      margin 0px
      padding 0px

</style>
