import { actionsTypes } from "../constants/participante";

const reducers = (state = {}, { payload, type }) => {
  switch (type) {
    case actionsTypes.SET_ACTIVE_PART:
      return {
        ...state,
        ActivePart: payload
      };
    default:
      return state;
  }
};

export { reducers };
