const navigationselectors = {
  getGoBack: state => state.navigationReducers.goBack,
  getSearch: state => state.navigationReducers.search,
  getLogout: state => state.navigationReducers.logout
};

export { navigationselectors };
