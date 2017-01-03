// @flow
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type Props = {
  title: string
};

export default function Home(props: Props) {
  return (
    <View style={styles.container}>
      <Text>
        The current scene is titled {props.title}.
      </Text>
    </View>
  );
}
