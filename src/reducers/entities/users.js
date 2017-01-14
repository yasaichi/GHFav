// @flow
import type { FluxStandardAction } from 'flux-standard-action';

import { FETCH_RECEIVED_EVENTS_SUCCESS } from '../../actions';

type Users = Object;
type Payload = {
  entities: {
    users: Users,
  },
};

type State = Users;
type Action = FluxStandardAction<string, Payload, any>;

export default function users(state: State = {}, action: Action) {
  switch (action.type) {
    case FETCH_RECEIVED_EVENTS_SUCCESS: {
      return action.payload ?
        { ...state, ...action.payload.entities.users } : state;
    }
    default: {
      return state;
    }
  }
}
