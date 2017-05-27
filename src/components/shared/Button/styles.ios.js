// @flow
// ref. https://github.com/facebook/react-native/blob/master/Libraries/Components/Button.js
import { StyleSheet } from 'react-native';

const defaultBlue = '#0C42FD'; // Measured default tintColor from iOS 10
const borderRadius = 4;

export default StyleSheet.create({
  touchable: {
    borderRadius,
  },
  button: {
    backgroundColor: defaultBlue,
    borderRadius,
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
    padding: 8,
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  buttonDisabled: {
    backgroundColor: '#dfdfdf',
  },
  textDisabled: {
    color: '#a1a1a1',
  },
});
