<template>
  <div class="auth" v-if="!getLoaderDisplayerState">
    <transition name="fade" mode="out-in" appear>
      <div class="container">
        <login v-if="true"></login>
        <logout v-if="false"></logout>
        <register v-if="false"></register>
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
    ...mapGetters(['getLoaderDisplayerState'])
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
