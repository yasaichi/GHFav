// @flow
import React from 'react';
import { apiMiddlewareCreator } from '@yasaichi/redux-api-middleware';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { normalizrMiddleware } from '../../middlewares';
import rootReducer from '../../reducers';
import Router from './Router';

let middleware = [
  apiMiddlewareCreator(fetch),
  normalizrMiddleware,
];

if (__DEV__) {
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
