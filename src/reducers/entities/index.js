// @flow
import { combineReducers } from 'redux';

import events from './events';
import organizations from './organizations';
import repositories from './repositories';
import users from './users';

export default combineReducers({
  events,
  organizations,
  repositories,
  users,
});
