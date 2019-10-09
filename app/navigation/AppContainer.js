import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import SplashScreen from '../screens/SplashScreen';

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
    SplashScreen,
    HomeStack,
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
