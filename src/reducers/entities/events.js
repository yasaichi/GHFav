// @flow
import type { FluxStandardAction } from 'flux-standard-action';

import { FETCH_RECEIVED_EVENTS_SUCCESS } from '../../constants/ActionTypes';

type Events = Object;
type Payload = {
  entities: {
    events: Events,
  },
};

type State = Events;
type Action = FluxStandardAction<string, Payload, any>;

export default function events(state: State = {}, action: Action) {
  switch (action.type) {
    case FETCH_RECEIVED_EVENTS_SUCCESS: {
      return action.payload ?
        { ...state, ...action.payload.entities.events } : state;
    }
    default: {
      return state;
    }
  }
}
