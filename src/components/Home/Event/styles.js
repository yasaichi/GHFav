import { StyleSheet } from 'react-native';

const margin = 12;

export default StyleSheet.create({
  avatar: {
    width: 44,
    height: 44,
    borderColor: '#eaecef',
    borderRadius: 22,
    marginRight: margin,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    borderBottomColor: '#eaecef',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: margin,
  },
  createdAt: {
    color: '#6a737d',
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main: {
  },
  repo: {
    color: '#0366d6',
    fontSize: 16,
  },
  username: {
    color: '#24292e',
    fontSize: 15,
    fontWeight: '500',
  },
});
