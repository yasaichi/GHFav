// @flow
import React, { Component } from 'react';
import { ActivityIndicator, ListView, View } from 'react-native';

import CenteredView from '../CenteredView';
import Event from './Event';
import styles from './styles';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.id !== r2.id,
});

type Props = {
  fetchStarringEvents: Function,
  isLoading: boolean,
  starringEvents: Array<Object>,
};

export default class Home extends Component {
  props: Props;

  componentDidMount() {
    // TODO: Add a flag or something to avoid fetching data every time
    if (this.props.starringEvents.length === 0) {
      this.props.fetchStarringEvents();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading ?
          <CenteredView>
            <ActivityIndicator />
          </CenteredView> :
          <ListView
            dataSource={ds.cloneWithRows(this.props.starringEvents)}
            enableEmptySections
            renderRow={(event) => <Event {...event} />}
          />
        }
      </View>
    );
  }
}
