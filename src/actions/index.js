// @flow
import { CALL_API } from '@yasaichi/redux-api-middleware';

import * as schema from '../schema';

export const FETCH_RECEIVED_EVENTS_REQUEST = 'FETCH_RECEIVED_EVENTS_REQUEST';
export const FETCH_RECEIVED_EVENTS_SUCCESS = 'FETCH_RECEIVED_EVENTS_SUCCESS';
export const FETCH_RECEIVED_EVENTS_FAILURE = 'FETCH_RECEIVED_EVENTS_FAILURE';

export function fetchReceivedEvents() {
  return {
    [CALL_API]: {
      endpoint: ({ currentUser: { login } }) => `https://api.github.com/users/${login}/received_events`,
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      types: [
        FETCH_RECEIVED_EVENTS_REQUEST,
        {
          type: FETCH_RECEIVED_EVENTS_SUCCESS,
          meta: {
            schema: [schema.event],
          },
        },
        FETCH_RECEIVED_EVENTS_FAILURE,
      ],
    },
  };
}
