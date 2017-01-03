// @flow
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../../reducers';
import Router from './Router';

let middleware = [thunk];
if (__DEV__) {
  const logger = createLogger();
  middleware = [...middleware, logger];
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

export default function App(_props: Object) {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
