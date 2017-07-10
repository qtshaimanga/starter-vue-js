export const setUpdateSizeState = ({ commit, state }, bool) => {
  commit('RESIZE', bool);
}

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
