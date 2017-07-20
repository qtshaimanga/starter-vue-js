<template>
  <div class="login" ref="login">
    <div class="container" ref="container">
      <input placeholder="identifiant" name="_username" ref="username" type="text"/>
      <input placeholder="password" name="_password" ref="password" type="password"/>
      <input type="submit" value="login" @click="loginRequest"/>
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
	mounted () {},
  updated () {},
  methods:{
    ...mapActions({
        setAuthentification: 'setAuthentificationState'
    }),
    loginRequest: function(){
      let username = this.$refs.username.value
      let password = this.$refs.password.value

      this.$http.post('api/login', { "_username": username, "_password": password } ).then(response => {

        let auth = JSON.parse(response.data)
        if(auth.success === true){

          auth.username = username
          localStorage.setItem('auth', JSON.stringify(auth));
          this.setAuthentification(auth)

          this.$router.push('start')
        }

      }, response => {

        console.log("error",response);

      });
    }
  }
}
</script>

<style lang="stylus">
@import "~src/styles/app.styl"

  .login
    width 100%
    height 100%
    margin auto
    padding 20px 0px 20px 0px
    display flex
    justify-content center
    background-color $BLUE

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

</style>
