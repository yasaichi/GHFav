// @flow
import { combineReducers } from 'redux';

import currentUser from './currentUser';
import entities from './entities';
import routes from './routes';

export default combineReducers({
  currentUser,
  entities,
  routes,
});
