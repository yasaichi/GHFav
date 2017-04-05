// @flow
import { combineReducers } from 'redux';

import currentUser from './currentUser';
import entities from './entities';
import routes from './routes';
import ui from './ui';

export default combineReducers({
  currentUser,
  entities,
  routes,
  ui,
});
