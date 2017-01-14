// @flow
import type { FluxStandardAction } from 'flux-standard-action';

import { FETCH_RECEIVED_EVENTS_SUCCESS } from '../../actions';

type Organizations = Object;
type Payload = {
  entities: {
    organizations: Organizations,
  },
};

type State = Organizations;
type Action = FluxStandardAction<string, Payload, any>;

export default function organizations(state: State = {}, action: Action) {
  switch (action.type) {
    case FETCH_RECEIVED_EVENTS_SUCCESS: {
      return action.payload ?
        { ...state, ...action.payload.entities.organizations } : state;
    }
    default: {
      return state;
    }
  }
}
