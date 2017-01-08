// @flow
import camelcaseKeys from 'camelcase-keys';
import type { Action } from 'redux';

import { FETCH_RECEIVED_EVENTS_SUCCESS } from '../actions';

type State = Array<Object>;

function receivedEventsTransfomer(receivedEventsJson) {
  return receivedEventsJson.map((eventJson) => (
    camelcaseKeys(eventJson, { deep: true })
  ));
}

export default function receivedEvents(state: State = [], action: Action) {
  switch (action.type) {
    case FETCH_RECEIVED_EVENTS_SUCCESS:
      return [...state, ...receivedEventsTransfomer(action.payload)];
    default:
      return state;
  }
}
