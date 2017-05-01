// @flow
import { combineReducers } from 'redux';

import currentUser from './currentUser';
import entities from './entities';
import navigationState from './navigationState';
import ui from './ui';

export default combineReducers({
  currentUser,
  entities,
  navigationState,
  ui,
});
