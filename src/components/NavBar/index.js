// @flow
import React from 'react';
import NavigationBar from 'react-native-navbar';
import { withRouter } from 'react-router';

import BackButton from './BackButton';
import styles from './styles';

type Props = {
  location: {
    state?: {
      title: string,
    }
  },
  history: {
    canGo: (number) => boolean,
    goBack: () => void,
  }
};

function NavBar(props: Props) {
  const leftButton = props.history.canGo(-1) ?
    <BackButton onPress={props.history.goBack} /> : null;

  const title = props.location.state ? props.location.state.title : '';

  return (
    <NavigationBar
      containerStyle={styles.container}
      leftButton={leftButton}
      statusBar={{ style: 'light-content' }}
      title={{ title, style: styles.title }}
    />
  );
}

export default withRouter(NavBar);
