// @flow
import React, { Component } from 'react';

import { Text, View } from 'react-native';

import styles from './styles';

type Props = {
  navigation: {
    navigate: (string, any) => void
  },
};

export default class Welcome extends Component {
  props: Props;

  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text onPress={() => navigate('Home')} style={styles.text}>
          Login with GitHub
        </Text>
      </View>
    );
  }
}
