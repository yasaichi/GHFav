// @flow
import React from 'react';
import moment from 'moment';
import { Image, Text, View } from 'react-native';

import styles from './styles';

type Props = {
  actor: {
    avatarUrl: String,
    displayLogin: String,
  },
  repo: {
    name: String
  },
  createdAt: String,
  onPress: () => void,
};

export default function Event(props: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.actor.avatarUrl }}
        style={styles.avatar}
      />
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.userName}>
            {props.actor.displayLogin}
          </Text>
          <Text style={styles.createdAt} >
            {moment(props.createdAt).fromNow()}
          </Text>
        </View>
        <View style={styles.main}>
          <Text onPress={props.onPress} style={styles.repoName}>
            {props.repo.name}
          </Text>
        </View>
      </View>
    </View>
  );
}
