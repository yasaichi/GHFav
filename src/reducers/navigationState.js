import AppNavigator from '../navigators';

export default function navigationStateReducer(state, action) {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
}
