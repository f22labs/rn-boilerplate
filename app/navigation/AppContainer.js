import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import SplashContainer from '../screens/SplashContainer';

const HomeStack = createStackNavigator(
  {
    FirstScreen,
    SecondScreen,
  },
  {
    initialRouteName: 'FirstScreen',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const RootStack = createSwitchNavigator(
  {
    SplashContainer,
    HomeStack,
  },
  {
    initialRouteName: 'SplashContainer',
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
