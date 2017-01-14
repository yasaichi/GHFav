// @flow
import type { Dispatch } from 'redux';
import { camelizeKeys } from 'humps';
import { normalize } from 'normalizr';

import * as schema from '../schema';

export const FETCH_RECEIVED_EVENTS_SUCCESS = 'FETCH_RECEIVED_EVENTS_SUCCESS';

export function fetchReceivedEvents() {
  return (dispatch: Dispatch, getState) => {
    const { currentUser: { login } } = getState();

    fetch(`https://api.github.com/users/${login}/received_events`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch({
        type: FETCH_RECEIVED_EVENTS_SUCCESS,
        payload: normalize(camelizeKeys(responseJson), [schema.event]),
      });
    })
    .catch((error) => {
      console.error(error);
    });
  };
}
