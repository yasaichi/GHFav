// @flow
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import CenteredView from '../CenteredView';
import Event from './Event';
import styles from './styles';

type Props = {
  fetchStarringEvents: Function,
  isLoading: boolean,
  starringEvents: Array<Object>,
};

const keyExtractor = (item, _index) => item.id;

export default class Home extends Component {
  props: Props;

  componentDidMount() {
    this.props.fetchStarringEvents();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading ?
          <CenteredView>
            <ActivityIndicator />
          </CenteredView> :
          <FlatList
            data={this.props.starringEvents}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => <Event {...item} />}
          />
        }
      </View>
    );
  }
}
