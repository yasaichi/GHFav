// @flow
import React from 'react';

import { addNavigationHelpers } from 'react-navigation';
import { apiMiddleware } from 'redux-api-middleware';
import { applyMiddleware, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import AppNavigator from './navigators';
import { noopMiddleware, normalizrMiddleware } from './middlewares';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    apiMiddleware,
    normalizrMiddleware,
    __DEV__ ? logger : noopMiddleware,
  ),
);

const mapStateToProps = (state) => ({
  navigationState: state.navigationState,
});

const AppWithNavigationState = connect(mapStateToProps)((props) => {
  const navigation = addNavigationHelpers({
    dispatch: props.dispatch,
    state: props.navigationState,
  });

  return <AppNavigator navigation={navigation} />;
});

export default function App() {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}
