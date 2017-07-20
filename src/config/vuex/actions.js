export const setMobileState = ({ commit, state }, infos) => {
  commit('MOBILE', infos);
}

export const setLoaderDisplayerState = ({ commit, state }, display) => {
  commit('LOADERDISPLAYER', display);
}

export const setListOfResourcesState = ({ commit, state }, resource) => {
  commit('RESOURCES', resource);
}

export const setResourcesChangeState = ({ commit, state }, resources) => {
  commit('RESOURCESCHANGE', resources);
}

export const setProgressValueState = ({ commit, state }, progress) => {
  commit('PROGRESSVALUE', progress);
}

export const setAuthentificationState = ({ commit, state }, auth)=> {
  commit('AUTH', auth )
}

export const setCurrentUserState = ({ commit, state }, currentUser)=> {
  commit('CURRENT_USER', currentUser )
}
