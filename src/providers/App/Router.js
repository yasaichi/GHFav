// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Router as DefaultRouter, Scene } from 'react-native-router-flux';

import NavBar from '../../components/NavBar';
import Home from '../../containers/Home';

const DefaultRouterWithRedux = connect()(DefaultRouter);

export default function Router(_props: Object) {
  return (
    <DefaultRouterWithRedux navBar={NavBar}>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home" />
      </Scene>
    </DefaultRouterWithRedux>
  );
}
