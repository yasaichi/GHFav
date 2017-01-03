// @flow
import React from 'react';
import update from 'immutability-helper';
import { NavBar as DefaultNavBar } from 'react-native-router-flux';

import styles from './styles';

type Props = {
  navigationState: Object,
};

export default function NavBar(props: Props) {
  const newProps = update(props, {
    navigationState: {
      barButtonIconStyle: { $set: styles.barButtonIcon },
      navigationBarStyle: { $set: styles.navigationBar },
      titleStyle: { $set: styles.title },
    },
  });

  return <DefaultNavBar {...newProps} />;
}
