// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currentUser from './currentUser';
import entities from './entities';
import ui from './ui';

export default combineReducers({
  currentUser,
  entities,
  router: routerReducer,
  ui,
});
