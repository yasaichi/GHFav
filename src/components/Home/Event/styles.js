import { StyleSheet } from 'react-native';

const margin = 12;

export default StyleSheet.create({
  avatar: {
    width: 44,
    height: 44,
    borderColor: '#eee',
    borderRadius: 3,
    marginRight: margin,
    borderWidth: 1,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: margin,
  },
  createdAt: {
    color: '#888',
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main: {
  },
  repoName: {
    color: '#4078c0',
    fontSize: 16,
  },
  userName: {
    color: '#333',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
