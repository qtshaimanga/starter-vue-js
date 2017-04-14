import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './vuex/getters'
import * as actions from './vuex/actions'

Vue.use(Vuex)

const state = {
  resize: Boolean(),
  mobileInfos: Object(),
  loaderDisplayer: Boolean(true),
  resources: Object(),
  newResources: Object(),
  progressValue: Number(),
}

const mutations = {
  RESIZE (state, bool) {
    //if resized -> return true = watch this, do actions then set with false
    state.resize = bool;
  },
  MOBILE (state, infos) {
    //detect info for mobile
    state.mobileInfos = infos;
  },
  LOADERDISPLAYER (state, display) {
    //if set without parameters return the oposite of state, if set with false or true take this or this other value
    if(display === undefined){
      state.loaderDisplayer = state.loaderDisplayer ? false : state.loaderDisplayer ? false : true;
    }else if(typeof display === "boolean"){
      state.loaderDisplayer = display;
    }else{
      throw new Error("variable for LoaderDisplayer state invalid");
    }
  },
  RESOURCES (state, resource) {
    //init resource with loader and resource file
    state.resources[resource.id] = resource;
  },
  RESOURCESCHANGE (state, resources) {
    //init resource if resources was changed
    state.newResources = resources;
  },
  PROGRESSVALUE (state, progress) {
    //for loader progress bar
    state.progressValue = progress;
  },
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
