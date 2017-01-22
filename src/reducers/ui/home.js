// @flow
import type { FluxStandardAction } from 'flux-standard-action';

import {
  FETCH_RECEIVED_EVENTS_REQUEST,
  FETCH_RECEIVED_EVENTS_SUCCESS,
  FETCH_RECEIVED_EVENTS_FAILURE,
} from '../../actions';

type State = {
   isLoading: boolean,
};

type Action = FluxStandardAction<string, Object, any>;

const initialState: State = {
  isLoading: false,
};

export default function home(state: State = initialState, action: Action) {
  switch (action.type) {
    case FETCH_RECEIVED_EVENTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case FETCH_RECEIVED_EVENTS_SUCCESS:
    case FETCH_RECEIVED_EVENTS_FAILURE: {
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
}
