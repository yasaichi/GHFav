// @flow
import type { Dispatch } from 'redux';

export const FETCH_RECEIVED_EVENTS_SUCCESS = 'FETCH_RECEIVED_EVENTS_SUCCESS';

export function fetchReceivedEvents() {
  return (dispatch: Dispatch) => {
    fetch('https://api.github.com/users/yasaichi/received_events', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch({
        type: FETCH_RECEIVED_EVENTS_SUCCESS,
        payload: responseJson,
      });
    })
    .catch((error) => {
      console.error(error);
    });
  };
}
