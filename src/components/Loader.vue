<template>
  <div class="loader">
    <div class="container">
      <div id="progress-counter" ref="progress">{{ progress }}%</div>
      <div id="progress-bar" ref="bar"></div>
    </div>
  </div>
</template>

<script>
import TweenMax from 'gsap';
import AssetsLoader from 'assets-loader';
import Resources from '../services/resources';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'loader',
  components: {},
  data () {
    return {
      progress: Number(),
    }
  },
  watch: {
    getProgressValueState ()  {
      //TODO TimeLine

      var that = this;
      TweenMax.to(this, 1, {
        progress: this.getProgressValueState,
        onUpdate () {
          that.progress = Math.ceil( that.progress );
          TweenMax.to( that.$refs.bar, 0.1, { width: that.progress+"%" })
        },
        onComplete () {
          TweenMax.to( that.$refs.bar, 0.1, { width: that.progress+"%" })
          TweenMax.to( [that.$refs.progress, that.$refs.bar], 0.3, { y: -5, opacity: 0, ease: Sine.easeIn, delay: 0.2,
          onComplete () {
            that.setLoaderDisplayerState(false);
            that.setProgressValueState(0);
          }})
        }
      });
    },
    getResourcesChangeState () {
      this.setLoaderDisplayerState();
      this.initResourcesWithLoader(this.getListOfResourcesState);
    },
    getListOfResourcesState () {
      this.setLoaderDisplayerState();
    }
  },
  computed: {
    ...mapGetters(['getLoaderDisplayerState','getListOfResourcesState','getProgressValueState','getResourcesChangeState'])
  },
  created () {
    this.initResourcesWithLoader(Resources);
  },
  mounted () {},
  updated () {},
  methods:{
    ...mapActions(['setLoaderDisplayerState','setListOfResourcesState','setProgressValueState']),
    initResourcesWithLoader (resources) {
      let that = this;
      let AudioContext = window.AudioContext || window.webkitAudioContext || false;
      let audioContext = new AudioContext;
      let loader = new AssetsLoader({
        webAudioContext: audioContext,
      })
      .add(resources)
      .on('error', error => {
        console.log("loading error", error);
      })
      .on('progress', progress => {
        that.setProgressValueState((progress * 100).toFixed());
      })
      .on('complete', map => {
        loader.get().forEach(resource => {
          that.setListOfResourcesState(resource);
        });
      })
      .start();
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/app.styl"

.loader
  position absolute
  width 100%
  height 100%
  margin 0px
  padding 0px
  display flex
  justify-content center

.container
  width 10%
  height 10%
  margin auto
  #progress-bar
    width 0px
    height 3px
    background-color black

  #progress-counter
    text-align center

</style>
