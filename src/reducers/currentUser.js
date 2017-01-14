// @flow
import type { FluxStandardAction } from 'flux-standard-action';

import { FETCH_RECEIVED_EVENTS_SUCCESS } from '../actions';

type Payload = {
  result?: Array<Number>,
};

type Action = FluxStandardAction<string, Payload, any>;

type State = {
  login: string,
  receivedEvents: Set<Number>,
};

const initialState: State = {
  login: 'yasaichi',
  receivedEvents: new Set(),
};

export default function currentUser(state: State = initialState, action: Action) {
  switch (action.type) {
    case FETCH_RECEIVED_EVENTS_SUCCESS: {
      if (action.payload && action.payload.result) {
        return {
          ...state,
          receivedEvents: new Set([...state.receivedEvents, ...action.payload.result]),
        };
      }

      return state;
    }
    default: {
      return state;
    }
  }
}
