import { actionsTypes } from "../constants/navigation";

const navigationActions = {
  setGoBack: payload => ({
    payload,
    type: actionsTypes.SET_GO_BACK
  }),
  setSearch: payload => ({
    payload,
    type: actionsTypes.SET_SEARCH
  }),
  setLogout: payload => ({
    payload,
    type: actionsTypes.SET_LOGOUT
  })
};

export { navigationActions };
