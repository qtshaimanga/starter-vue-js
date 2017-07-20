<template>
  <div class="user" ref="user">
    <div class="container" ref="container">
      <p> Username :  {{ this.getCurrentUserState.username }} </p>
      <p> Auth :  {{ this.getCurrentUserState.auth }} </p>
      <p> Granted : {{ this.getCurrentUserState.granted }} </p>
      <p> Granted User :  {{ this.getCurrentUserState.granted_user }} </p>
      <p> Granted Admin : {{ this.getCurrentUserState.granted_super }} </p>
      <p> Token : {{ this.getAuthentificationState.token }} </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'user',
  components: {
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {
    ...mapGetters(['getCurrentUserState', 'getAuthentificationState'])
  },
  created () {

    this.userRequest()

  },
	mounted () {},
  updated () {},
  methods:{
    ...mapActions({
      setCurrentUser: 'setCurrentUserState'
    }),
    userRequest: function(){
      this.$http.get('api/user').then( (response) => {

          //console.log(response);
          let data  = JSON.parse(response.body);
          this.setCurrentUser(data);

        }, (error) => {

          console.log(error);

      });
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~src/styles/app.styl"

  .user
    width 100%
    height 5%
    margin 0px 0px 0px 0px
    padding 20px 0px 20px 0px
    display flex
    justify-content center
    background-color $YELLOW

    .container
      width auto
      height auto
      margin-right auto
      margin-left 5%
      padding 0px
      flex-wrap wrap
      flex-direction column

</style>
