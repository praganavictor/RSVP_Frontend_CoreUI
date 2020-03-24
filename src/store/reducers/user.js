import { actionsTypes } from "../constants/user";

const reducers = (state = {}, { payload, type }) => {
  switch (type) {
    case actionsTypes.ACTIVE_USER:
      return {
        ...state,
        ActiveUser: payload
      };
    default:
      return state;
  }
};

export { reducers };
