<template>
  <div class="login" ref="login">
    <div class="container" ref="container">
      <input placeholder="identifiant" name="_username" type="text"/>
      <input placeholder="password" name="_password" type="password"/>
      <input type="submit" value="login"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'login',
  components: {
  },
  data () {
    return {}
  },
  watch: {},
  computed: {
    ...mapGetters([])
  },
  created () {},
	mounted () {

  },
  updated () {},
  methods:{
  }
}
</script>

<style lang="stylus">
@import "../styles/app.styl"

  .login
    position absolute
    width 50%
    height 5%
    margin 0px 0px 0px 0%
    padding 0px
    display flex
    justify-content center
    background-color $BLUE

    .container
      width auto
      height auto
      margin auto
      padding 0px
      flex-wrap wrap
      flex-direction column

</style>
