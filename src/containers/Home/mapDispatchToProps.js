// @flow
import type { Dispatch } from 'redux';
import { fetchReceivedEvents } from '../../actions';

export default function (dispatch: Dispatch<*>) {
  return {
    fetchStarringEvents: () => dispatch(fetchReceivedEvents()),
  };
}
