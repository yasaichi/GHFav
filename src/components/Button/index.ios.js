// @flow
// ref. https://github.com/facebook/react-native/blob/master/Libraries/Components/Button.js
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import invariant from 'fbjs/lib/invariant';

import styles from './styles';

type Props = {
  title: string,
  onPress: () => any,
  color?: ?string,
  accessibilityLabel?: ?string,
  disabled?: ?boolean,
  testID?: ?string,
};

export default function Button(props: Props) {
  const { accessibilityLabel, color, onPress, title, disabled, testID } = props;

  invariant(
    typeof title === 'string',
    'The title prop of a Button must be a string',
  );

  const buttonStyles = [styles.button];
  const textStyles = [styles.text];
  const accessibilityTraits = ['button'];

  if (color) {
    buttonStyles.push({ backgroundColor: color });
  }

  if (disabled) {
    buttonStyles.push(styles.buttonDisabled);
    textStyles.push(styles.textDisabled);
  }

  if (disabled) {
    accessibilityTraits.push('disabled');
  }

  return (
    <TouchableHighlight
      accessibilityComponentType="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityTraits={accessibilityTraits}
      testID={testID}
      disabled={disabled}
      onPress={onPress}
      style={styles.touchable}
    >
      <View style={buttonStyles}>
        <Text style={textStyles} disabled={disabled}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
