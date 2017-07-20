<template>
  <div class="grid" v-if="!getLoaderDisplayerState">
    <div class="container">

      <h1>Holly Grail page layout</h1>
      <p>Note: in responsive view Aside 1 and Aside 2 elements stack below the Main content.</p>
       <div class="Grid Grid--full Grid--nested header">
         <div class="Grid-cell">
           <div class="Demo Holly">
             <img :src="getListOfResourcesState.vue_logo.file.src" ><strong> Header / Logo</strong>
           </div>
         </div>
       </div>

       <div class="Grid Grid--full">
         <div class="Grid-cell">
          <ul class="navigation">
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Products</a></li>
           <li><a href="#">Contact</a></li>
          </ul>
         </div>
       </div>

       <div class="Grid Grid--gutters Grid--holly-grail">
         <div class="Grid-cell main">
           <div class="Demo Holly">
             <strong>Main</strong>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           </div>
         </div>
         <div class="Grid-cell aside aside-1">
           <div class="Demo Holly"><strong>Aside 1</strong><br />
             <div class="img-placeholder"> <img :src="getListOfResourcesState.vue_logo.file.src" /> </div>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </div>
         </div>
         <div class="Grid-cell aside aside-2">
           <div class="Demo Holly">
             <strong>Aside 2</strong>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           </div>
         </div>
       </div>

       <div class="Grid Grid--full">
         <div class="Grid-cell">
          <div class="Demo Holly">
           <strong>Footer</strong>
           <br /> Copyright &copy;
          </div>
         </div>
       </div>
       <hr />
       <p> Flexbox project </p>
       <br />
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions  } from 'vuex';

export default {
  name: 'grid',
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
	mounted () {},
  updated () {},
  methods:{
    ...mapActions({}),
  }
}
</script>

<style lang="stylus">
@import "~src/styles/app.styl"

  .grid
    width 100%
    height 100%
    margin 0px
    padding 0px
    .container
      width 100%
      height 100%
      margin 0px
      padding 0px

  img
    width 100px
    height 100px

</style>
