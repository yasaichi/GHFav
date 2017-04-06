// @flow
import React from 'react';
import moment from 'moment';
import { Image, Text, View } from 'react-native';
import { Link } from 'react-router-native';

import styles from './styles';

type Props = {
  actor: {
    avatarUrl: string,
    displayLogin: string,
  },
  repo: {
    name: string
  },
  createdAt: string,
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
          <Link
            to={{
              pathname: `/repos/${props.repo.name}`,
              state: { title: props.repo.name },
            }}
          >
            <Text style={styles.repoName}>
              {props.repo.name}
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
