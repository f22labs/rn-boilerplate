import {createAppContainer} from 'react-navigation';
import {createStackNavigator, SwitchNavigator} from 'react-navigation-stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

const rootStack = createStackNavigator(
  {
    FirstScreen,
    SecondScreen,
  },
  {
    initialRouteName: 'FirstScreen',
    defaultNavigationOptions: {
      // header: null,
    },
  },
);

const AppContainer = createAppContainer(rootStack);

export default AppContainer;
