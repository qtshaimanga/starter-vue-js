<template>
  <div class="register" ref="register">
    <div class="container" ref="container">
      <input placeholder="identifiant" name="username" ref="username" type="text"/>
      <input placeholder="email" name="email" ref="email" type="text"/>
      <input placeholder="password" name="password" ref="password" type="password"/>
      <input placeholder="repeat password" name="_password" ref="_password" type="password"/>
      <input type="submit" value="register" @click="registerRequest"/>
      <p @click="setAuthDisplayer([true, false, false])">login</p>
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
    ...mapGetters(['getAuthDisplayerState'])
  },
  created () {},
	mounted () {},
  updated () {},
  methods:{
    ...mapActions({
      setAuthDisplayer: 'setAuthDisplayerState'
    }),
    registerRequest: function(){
      let email = this.$refs.email
      let username = this.$refs.username
      let password = this.$refs.password

      this.$http.post('api/register', { "email": email, "username": username, "password": password } ).then(response => {

        console.log(response);

      }, response => {

        console.log("error",response);

      });
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~src/styles/app.styl"

  .register
    width 100%
    height 100%
    margin 0px 0px 0px 0px
    padding 20px 0px 20px 0px
    display flex
    justify-content center
    background-color $YELLOW

    .container
      width auto
      height auto
      margin auto
      padding 20px 0px 20px 0px
      display flex
      flex-wrap wrap
      flex-direction column

      input
        margin 0px 0px 15px 0px
        padding 8px 4px 8px 4px

      p
      color white

</style>
