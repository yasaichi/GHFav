// @flow
import React, { Component } from 'react';

import { Linking, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import URI from 'urijs';

import { hideBrowserView, showURLWithBrowserView } from '../../utils';
import Button from '../shared/Button';
import config from '../../config';
import styles from './styles';

type Props = {
  onAuthorizationRequestApproved: (code: string) => void,
};

const SIGN_UP_URL = 'https://github.com/join';
const SIGN_IN_URL = 'https://github.com/login/oauth/authorize';

export default class Welcome extends Component {
  props: Props;

  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    Linking.addEventListener('url', this._handleIncomingLinks);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleIncomingLinks);
  }

  render() {
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
            onPress={() => showURLWithBrowserView(
              SIGN_IN_URL,
              { client_id: config.GITHUB_CLIENT_ID },
            )}
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

  _handleIncomingLinks = (event) => {
    hideBrowserView();

    const url = new URI(event.url);
    const params = url.query(true);

    // TODO: Check whether `state` param is valid
    if (url.host() === 'auth' && url.segment()[0] === 'github' && params.code) {
      this.props.onAuthorizationRequestApproved(params.code);
    }
  }
}
