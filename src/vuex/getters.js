export const getUpdateSizeState = (state) => {
  return state.resize;
}

export const getMobileState = (state) => {
  return state.mobileInfos;
}

export const getLoaderDisplayerState = (state) => {
  return state.loaderDisplayer;
}

export const getListOfResourcesState = (state) => {
  return state.resources;
}

export const getResourcesChangeState = (state) => {
  return state.newResources;
}

export const getProgressValueState = (state) => {
  return state.progressValue;
}
