// @flow
import { TabNavigator } from 'react-navigation';

import Home from '../../containers/Home';
import styles from './styles';

const routeConfigs = {
  Home: { screen: Home },
};

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#24292e',
    inactiveTintColor: 'rgba(27,31,35,0.3)',
    showLabel: false,
    style: styles.tabBar,
  },
};

export default TabNavigator(routeConfigs, TabNavigatorConfig);
