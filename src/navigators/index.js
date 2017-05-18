// @flow
import { StackNavigator } from 'react-navigation';

import MainNavigator from './MainNavigator';
import Repository from '../containers/Repository';
import Welcome from '../components/Welcome';
import styles from './styles';

const routeConfigs = {
  MainNavigator: { screen: MainNavigator },
  Welcome: { screen: Welcome },
  Repository: { screen: Repository },
};

const stackNavigatorConfig = {
  initialRouteName: 'Welcome',
  cardStyle: styles.card,
  navigationOptions: {
    headerBackTitle: null,
    headerTintColor: '#586169',
    headerTitleStyle: styles.headerTitle,
    headerStyle: styles.header,
  },
};

export default StackNavigator(routeConfigs, stackNavigatorConfig);
