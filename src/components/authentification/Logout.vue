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
  }
}
</script>

<style lang="stylus" scoped>
// @import "~src/styles/app.styl"
//
//   .logout
//     position absolute
//     width 50%
//     height 5%
//     margin 0px 0px 0px 0%
//     padding 0px
//     display flex
//     justify-content center
//     background-color $BLUE
//
//     .container
//       width auto
//       height auto
//       margin auto
//       padding 0px
//       flex-wrap wrap
//       flex-direction column

</style>
