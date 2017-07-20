<template>
  <div class="register" ref="register">
    <div class="container" ref="container">
      <input placeholder="identifiant" name="username" ref="username" type="text"/>
      <input placeholder="email" name="email" ref="email" type="text"/>
      <input placeholder="password" name="password" ref="password" type="password"/>
      <input placeholder="repeat password" name="_password" ref="_password" type="password"/>
      <input type="submit" value="logout" @click="logout"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'register',
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
    ...mapActions({}),
    logout: function(){

    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~src/styles/app.styl"

  .register
    width 50%
    height 5%
    margin 0px 0px 0px 0px
    padding 20px 0px 20px 0px
    display flex
    justify-content center
    background-color $YELLOW

    .container
      width auto
      height auto
      margin auto
      padding 0px
      flex-wrap wrap
      flex-direction column

</style>
