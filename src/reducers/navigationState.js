// @flow
import { NavigationActions } from 'react-navigation';

import { GET_CREDENTIALS_WITH_CODE_SUCCESS } from '../constants/ActionTypes';
import AppNavigator from '../navigators';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainNavigator' }),
  ],
});

export default function navigationStateReducer(state, action) {
  switch (action.type) {
    case GET_CREDENTIALS_WITH_CODE_SUCCESS: {
      return AppNavigator.router.getStateForAction(resetAction, state);
    }
    default: {
      const newState = AppNavigator.router.getStateForAction(action, state);
      return newState || state;
    }
  }
}
