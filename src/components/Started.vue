<template>
  <div class="started">
    <div class="container">
      <p>{{ getListOfResourcesState.json_data.file.INTRO.id }}</p>
      <div class="intro" v-for="(item, key) in getListOfResourcesState.json_data.file.INTRO.url" :key="n" :data-index="n">
        <a :href="item" target="_blank"> {{ key }} </a>
      </div>
      <transition name="fade" mode="out-in" appear>
        <div>
          <p> {{ getListOfResourcesState.json_data.file.WORK }} </p>
          <img :src="getListOfResourcesState.vue_logo.file.src" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';
import { mapGetters } from 'vuex';

export default {
  name: 'started',
  components: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {
    ...mapGetters(['getListOfResourcesState'])
  },
  created () {},
  mounted () {
    this.animate();
  },
  updated () {},
  methods:{
    animate () {
      TweenMax.staggerFrom(".intro", 1, { y:-20, opacity:0, ease: Power1.easeOut }, 0.2);
      TweenMax.staggerTo(".intro", 1, { y:0, opacity:1, ease: Power1.easeOut }, 0.2);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.started{
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  background-color: #F5F5F5;
  display: flex;
  justify-content: center;
}

.container{
  flex-wrap: wrap;
  flex-direction: column;
  margin: auto;
  p{
    text-align: center;
    font-size: 12px;
    color: #333333;
    font-family: 'san_francisco_displaysemibold';
  }
  div{
    text-align: center;
    a{
      font-family: 'san_francisco_displayregular';
      text-decoration: none;
      color: #333333;
      font-size: 12px;
      text-transform: lowercase;;
    }
  }
  img{
    width: 20%;
    height: auto;
  }
}

</style>
