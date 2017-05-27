// @flow
import React, { Component } from 'react';

import { Linking, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button from '../shared/Button';
import styles from './styles';

type Props = {
  navigation: {
    navigate: (string, any) => void
  },
};

const SIGN_UP_URL = 'https://github.com/join';

export default class Welcome extends Component {
  props: Props;

  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.appIcon}>
            <Icon name="github" size={100} />
            <Text style={{ textAlign: 'center', fontSize: 28 }}>
              GHFav
            </Text>
          </View>
          <Text style={styles.description}>
            Timeline of repositories starred by
            people you&#39;re following on GitHub
          </Text>
        </View>
        <View style={styles.main}>
          <Button
            color="#28a745"
            onPress={() => navigate('Home')}
            title="Login with GitHub"
          />
        </View>
        <View style={styles.footer}>
          <Text
            onPress={() => Linking.openURL(SIGN_UP_URL)}
            style={styles.createAccount}
          >
            Not on GitHub?
          </Text>
        </View>
      </View>
    );
  }
}
