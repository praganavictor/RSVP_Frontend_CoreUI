import { actionsTypes } from "../constants/navigation";

const INITIAL_STATE = {
  goBack: false,
  search: false,
  logout: false
};

const reducers = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case actionsTypes.SET_GO_BACK:
      return {
        ...state,
        goBack: payload
      };

    case actionsTypes.SET_LOGOUT:
      return {
        ...state,
        logout: payload
      };

    case actionsTypes.SET_SEARCH:
      return {
        ...state,
        search: payload
      };

    default:
      return state;
  }
};

export { reducers };
