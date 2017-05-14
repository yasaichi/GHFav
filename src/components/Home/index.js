// @flow
import React, { Component } from 'react';

import { ActivityIndicator, FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CenteredView from '../CenteredView';
import Event from './Event';
import styles from './styles';

type Props = {
  fetchStarringEvents: Function,
  isLoading: boolean,
  navigation: {
    navigate: (string, any) => void
  },
  starringEvents: Array<Object>,
};

const keyExtractor = (item, _index) => item.id;

export default class Home extends Component {
  props: Props;

  static navigationOptions = {
    title: 'GHFav',
    tabBarIcon: ({ tintColor }) => (
      <Icon color={tintColor} name="home" size={30} />
    ),
  }

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
            renderItem={this._renderItem}
          />
        }
      </View>
    );
  }

  _renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;

    return (
      <Event
        {...item}
        onPress={() => navigate('Repository', { id: item.repo.name })}
      />
    );
  }
}
