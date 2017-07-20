<template>
  <div class="start" v-if="!getLoaderDisplayerState">
    <transition name="fade" mode="out-in" appear>
      <div>
        <user></user>
        <started></started>
        <yolo></yolo>
      </div>
    </transition>
  </div>
</template>

<script>
import Started from '../components/Started';
import Yolo from '../components/Yolo';
import User from '../components/User';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'start',
  components: {
    Started,
    Yolo,
    User,
  },
  data () {
    return {}
  },
  watch: {
    getCurrentUserState: function(n){

      console.log("and token refer to user : ", n);

    }
  },
  computed: {
    ...mapGetters(['getLoaderDisplayerState', 'getAuthentificationState', 'getCurrentUserState'])
  },
	mounted () {

    console.log("After Login App started with token : ", this.getAuthentificationState );

  },
  methods:{
    ...mapActions({}),
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
