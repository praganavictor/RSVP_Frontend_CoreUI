import { actionsTypes } from "../constants/user";

const userActions = {
  setActiveUser: payload => ({
    payload,
    type: actionsTypes.ACTIVE_USER
  })
};

export { userActions };
