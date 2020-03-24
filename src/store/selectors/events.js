const eventselectors = {
  AllEvents: state => state.eventsReducers.events,
  ActiveEvent: state => state.eventsReducers.activeEvent
};

export { eventselectors };
