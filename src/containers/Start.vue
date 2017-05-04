<template>
  <div class="start" v-if="!getLoaderDisplayerState">
    <transition name="fade" mode="out-in" appear>
      <div>
        <started></started>
        <yolo></yolo>
      </div>
    </transition>
  </div>
</template>

<script>
import Started from '../components/Started';
import Yolo from '../components/Yolo';

import { mapGetters } from 'vuex';

export default {
  name: 'start',
  components: {
    Started,
    Yolo
  },
  data () {
    return {}
  },
  watch: {},
  computed: {
    ...mapGetters(['getLoaderDisplayerState'])
  },
  created () {},
	mounted () {},
  updated () {},
  methods:{}
}
</script>

<style lang="stylus">
@import "../styles/app.styl"

  .start
    width 100%
    height 100%
    margin 0px
    padding 0px

</style>
