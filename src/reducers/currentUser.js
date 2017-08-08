// @flow
import type { FluxStandardAction } from 'flux-standard-action';
import union from 'lodash.union';

import {
  FETCH_RECEIVED_EVENTS_SUCCESS,
  GET_CREDENTIALS_WITH_CODE_SUCCESS,
} from '../constants/ActionTypes';

type Action = FluxStandardAction<string, *, *>;

type State = {
  credentials: {
    accessToken: string,
    username: string,
  },
  receivedEvents: Array<Number>,
};

const initialState: State = {
  credentials: {},
  receivedEvents: [],
};

export default function currentUser(state: State = initialState, action: Action) {
  switch (action.type) {
    case FETCH_RECEIVED_EVENTS_SUCCESS: {
      if (action.payload && action.payload.result) {
        const receivedEvents =
          union(state.receivedEvents, action.payload.result.map((id) => parseInt(id, 10)))
          .sort((id1, id2) => id2 - id1);

        return { ...state, receivedEvents };
      }

      return state;
    }
    case GET_CREDENTIALS_WITH_CODE_SUCCESS: {
      return { ...state, credentials: action.payload };
    }
    default: {
      return state;
    }
  }
}
