// @flow
import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

import * as schema from '../../schema';

const WATCH_EVENT = 'WatchEvent';
const entitiesSchema = { events: [schema.event] };

export default createSelector(
  (state) => state.currentUser.receivedEvents,
  (state) => state.currentUser.login,
  (state) => state.entities,
  (receivedEvents, username, entities) => {
    const starringEvents = denormalize({ events: receivedEvents }, entitiesSchema, entities).events
      .filter((event) => event.type === WATCH_EVENT)
      .filter((event) => event.repo.name.split('/')[0] !== username)
      .sort((e1, e2) => parseInt(e2.id, 10) - parseInt(e1.id, 10));

    return { starringEvents };
  },
);
