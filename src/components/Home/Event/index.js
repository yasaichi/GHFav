// @flow
import React from 'react';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
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
          <Text
            style={styles.repoName}
            onPress={() => Actions.repositoryDetail({ title: props.repo.name, url: `https://github.com/${props.repo.name}` })}
          >
            {props.repo.name}
          </Text>
        </View>
      </View>
    </View>
  );
}
