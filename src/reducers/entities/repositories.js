// @flow
import type { FluxStandardAction } from 'flux-standard-action';

import { FETCH_RECEIVED_EVENTS_SUCCESS } from '../../constants/ActionTypes';

type Repositories = Object;
type Payload = {
  entities: {
    repositories: Repositories,
  },
};

type State = Repositories;
type Action = FluxStandardAction<string, Payload, any>;

export default function repositories(state: State = {}, action: Action) {
  switch (action.type) {
    case FETCH_RECEIVED_EVENTS_SUCCESS: {
      return action.payload ?
        { ...state, ...action.payload.entities.repositories } : state;
    }
    default: {
      return state;
    }
  }
}
