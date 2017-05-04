<template>
  <div class="yolo" ref="yolo">
    <div class="container" ref="container">
      <p> Hey Bernard !</p>
      <div ref="bernard"></div>
    </div>
  </div>
</template>

<script>
import bodymovin from 'bodymovin';
import { TweenMax } from 'gsap'
import { mapGetters } from 'vuex';

export default {
  name: 'start',
  components: {
  },
  data () {
    return {}
  },
  watch: {},
  computed: {
    ...mapGetters(['getLoaderDisplayerState', 'getListOfResourcesState'])
  },
  created () {},
	mounted () {

    this.bodymovinAnimation();

  },
  updated () {},
  methods:{
    bodymovinAnimation (){
      const that = this;
      let count = 0;
      let container = this.$refs.bernard
      let bernard = JSON.stringify(this.getListOfResourcesState.bernard.file);

      let animData = {
          container: container,
          renderer: 'svg',
          loop: true,
          prerender: false,
          autoplay: false,
          autoloadSegments: false,
          animationData: JSON.parse(bernard)
      };

      let anim;

      anim = bodymovin.loadAnimation(animData);
      anim.addEventListener('DOMLoaded',() => {

        anim.playSegments([[0,26],[14,26]],true);

      });

      let isThrowing = false;
      container.onclick = throwPancake;

      function throwComplete() {
          isThrowing = false;
          TweenMax.to( that.$refs.yolo, 0.5, { backgroundColor: "#233254", delay: 0.1 })
          anim.removeEventListener('loopComplete',throwComplete);
      }

      function throwPancake(){
        if(isThrowing){
           return;
        }
        isThrowing = true;
        anim.playSegments([[27,142],[14,26]],true);
        TweenMax.to( that.$refs.yolo, 0.7, { backgroundColor: "#FBC33B",  delay: 1.34 , onComplete(){
          anim.addEventListener('loopComplete',throwComplete);
        }})
       }

    }
  }
}
</script>

<style lang="stylus">
@import "../styles/app.styl"

  .yolo
    position absolute
    width 50%
    height 100%
    margin 0px 0px 0px 50%
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
      p
        text-align center
        color #FFFFFF

</style>
