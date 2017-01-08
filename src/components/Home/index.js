// @flow
import React, { Component } from 'react';
import { ListView, View } from 'react-native';

import Event from './Event';
import styles from './styles';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.id !== r2.id,
});

type Props = {
  fetchStarringEvents: Function,
  starringEvents: Array<Object>,
};

export default class Home extends Component {
  props: Props;

  componentDidMount() {
    this.props.fetchStarringEvents();
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={ds.cloneWithRows(this.props.starringEvents)}
          enableEmptySections
          renderRow={(event) => <Event {...event} />}
        />
      </View>
    );
  }
}
