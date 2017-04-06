// @flow
import React from 'react';

import createHistory from 'history/createMemoryHistory';
import logger from 'redux-logger';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-native';
import { View } from 'react-native';
import { apiMiddlewareCreator } from '@yasaichi/redux-api-middleware';
import { applyMiddleware, createStore } from 'redux';

import NavBar from '../../components/NavBar';
import rootReducer from '../../reducers';
import routes from './routes';
import { normalizrMiddleware } from '../../middlewares';

const history = createHistory();
let middleware = [
  apiMiddlewareCreator(fetch),
  normalizrMiddleware,
  routerMiddleware(history),
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
      <ConnectedRouter history={history}>
        <View style={{ flex: 1 }}>
          <NavBar />
          {routes.map((route, i) => <Route exact {...route} key={i} />)}
        </View>
      </ConnectedRouter>
    </Provider>
  );
}
