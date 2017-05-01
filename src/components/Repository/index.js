// @flow
import React, { Component } from 'react';
import { WebView } from 'react-native';

type Props = {
  navigation: {
    state: {
      params: {
        id: string,
      },
    },
  },
};

export default class Repository extends Component {
  props: Props

  static navigationOptions({ navigation }) {
    return {
      title: navigation.state.params.id,
    };
  }

  render() {
    const uri = `https://github.com/${this.props.navigation.state.params.id}`;
    return <WebView source={{ uri }} />;
  }
}
