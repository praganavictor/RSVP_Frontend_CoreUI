import { actionsTypes } from "../constants/events";

const INITIAL_STATE = {
  events: [],
  activeEvent: {}
};

const reducers = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case actionsTypes.SET_EVENTS:
      return {
        ...state,
        events: payload
      };

    case actionsTypes.TOGGLE_SEARCH:
      state.events = state.events.filter(
        event => event.nome.toLowerCase().indexOf(payload.toLowerCase()) !== -1
      );
      return { ...state };

    case actionsTypes.SET_ACTIVE_EVENT:
      return { activeEvent: payload };

    default:
      return state;
  }
};

export { reducers };
