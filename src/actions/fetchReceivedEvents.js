// @flow
import { RSAA } from 'redux-api-middleware';

import * as schema from '../schema';
import {
  FETCH_RECEIVED_EVENTS_REQUEST,
  FETCH_RECEIVED_EVENTS_SUCCESS,
  FETCH_RECEIVED_EVENTS_FAILURE,
} from '../constants/ActionTypes';

const GITHUB_API_ORIGIN = __DEV__ ? 'http://localhost:3000' : 'https://api.github.com';

export default function fetchReceivedEvents() {
  return {
    [RSAA]: {
      endpoint: ({ currentUser: { login } }) => (
        `${GITHUB_API_ORIGIN}/users/${login}/received_events`
      ),
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
