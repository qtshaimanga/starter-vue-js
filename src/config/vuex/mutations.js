import state from './state'

export const mutations = {
  MOBILE (state, infos) {
    //detect mobile info
    state.mobileInfos = infos;
  },
  LOADERDISPLAYER (state, display) {
    /*
    if set displayer without parameters return the oposite of state,
    if set with false or true take this or this other value
    */
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
    //init resource if resources was changed (EN-FR)
    state.newResources = resources;
  },
  PROGRESSVALUE (state, progress) {
    //for loader progress bar
    state.progressValue = progress;
  },
  AUTH (state, auth){
    //set authentification information
    state.authentification = auth;
  },
  CURRENT_USER (state, currentUser){
    //set current user logged
    state.currentUser = currentUser;
  }

}
