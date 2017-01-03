import { StatusBar, StyleSheet } from 'react-native';

// TODO: Consider a better way to change the StatusBar color
StatusBar.setBarStyle('light-content', true);

export default StyleSheet.create({
  barButtonIcon: {
    tintColor: '#bbc4ce',
  },
  navigationBar: {
    backgroundColor: '#3c4146',
    borderBottomColor: '#202326',
    borderBottomWidth: 1,
  },
  title: {
    color: '#f0f6fc',
    fontWeight: 'bold',
  },
});
