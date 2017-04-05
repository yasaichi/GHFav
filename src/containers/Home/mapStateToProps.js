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
  (state) => state.ui.home,
  (receivedEvents, username, entities, ui) => {
    const starringEvents = denormalize({ events: receivedEvents }, entitiesSchema, entities).events
      .filter((event) => event.type === WATCH_EVENT)
      .filter((event) => event.repo.name.split('/')[0] !== username);

    return { starringEvents, ...ui };
  },
);
