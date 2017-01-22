// @flow
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

type Props = {
  children: Object,
};

export default function CenteredView(props: Props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}
