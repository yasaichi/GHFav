// @flow
import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';

import source from './image.png';
import styles from './styles';

type Props = {
  onPress: () => void,
};

export default function BackButton(props: Props) {
  return (
    <TouchableWithoutFeedback {...props} style={styles.container}>
      <Image
        style={styles.image}
        source={source}
      />
    </TouchableWithoutFeedback>
  );
}
