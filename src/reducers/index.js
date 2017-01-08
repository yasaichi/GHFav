// @flow
import { combineReducers } from 'redux';

import routes from './routes';
import receivedEvents from './receivedEvents';

export default combineReducers({
  receivedEvents,
  routes,
});
