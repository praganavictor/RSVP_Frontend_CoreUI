import { actionsTypes } from "../constants/participante";

const partActions = {
  setActiveUser: payload => ({
    payload,
    type: actionsTypes.SET_ACTIVE_PART
  })
};

export { partActions };
