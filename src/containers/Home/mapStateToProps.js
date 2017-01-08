// @flow
import { createSelector } from 'reselect';

const WATCH_EVENT = 'WatchEvent';

export default createSelector(
  (state) => state.routes,
  (state) => state.receivedEvents,
  (routes, receivedEvents) => {
    const starringEvents = receivedEvents.filter((event) => event.type === WATCH_EVENT);

    return {
      routes,
      starringEvents,
    };
  },
);
