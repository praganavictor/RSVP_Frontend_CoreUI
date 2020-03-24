import { actionsTypes } from "../constants/events";

const eventActions = {
  SetEvents: payload => ({
    payload,
    type: actionsTypes.SET_EVENTS
  }),
  toggleSearch: payload => ({
    payload,
    type: actionsTypes.TOGGLE_SEARCH
  }),
  setActiveEvent: payload => ({
    payload,
    type: actionsTypes.SET_ACTIVE_EVENT
  })
};

export { eventActions };
