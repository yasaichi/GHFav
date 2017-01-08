// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Navigator } from 'react-native';
import { Router as DefaultRouter, Scene } from 'react-native-router-flux';

import Home from '../../containers/Home';
import NavBar from '../../components/NavBar';
import RepositoryDetail from '../../containers/RepositoryDetail';

const DefaultRouterWithRedux = connect()(DefaultRouter);

export default function Router(_props: Object) {
  return (
    <DefaultRouterWithRedux
      navBar={NavBar}
      sceneStyle={{
        paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight,
      }}
    >
      <Scene key="root">
        <Scene key="home" component={Home} title="GHFav" />
        <Scene key="repositoryDetail" component={RepositoryDetail} />
      </Scene>
    </DefaultRouterWithRedux>
  );
}
