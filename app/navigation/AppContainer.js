import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import SplashContainer from '../screens/SplashContainer';
const Stack = createStackNavigator();

function Root({ setLoading }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash">
          {props => <SplashContainer {...props} setLoading={setLoading} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AppContainer() {
  const [loading, setLoading] = React.useState(true);

  if (loading) {
    return <Root setLoading={setLoading} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
