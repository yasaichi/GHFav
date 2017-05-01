// @flow
import { StackNavigator } from 'react-navigation';

import Home from '../containers/Home';
import Repository from '../containers/Repository';
import styles from './styles';

const routeConfigs = {
  Home: { screen: Home },
  Repository: { screen: Repository },
};

const stackNavigatorConfig = {
  initialRouteName: 'Home',
  cardStyle: styles.card,
  navigationOptions: {
    headerBackTitle: null,
    headerTintColor: 'rgba(255,255,255,0.75)',
    headerTitleStyle: styles.headerTitle,
    headerStyle: styles.header,
  },
};

export default StackNavigator(routeConfigs, stackNavigatorConfig);
