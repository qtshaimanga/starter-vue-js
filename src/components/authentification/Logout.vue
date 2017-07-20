<template>
  <div class="logout" ref="logout">
    <div class="container" ref="container">
      <input type="submit" value="logout"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'logout',
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
  }
}
</script>

<style lang="stylus" scoped>
@import "~src/styles/app.styl"

  .logout
    width 50%
    height 5%
    margin 0px 0px 0px 0px
    padding 20px 0px 20px 0px
    display flex
    justify-content center
    background-color $GRAY

    .container
      width auto
      height auto
      margin auto
      padding 0px
      flex-wrap wrap
      flex-direction column

</style>
