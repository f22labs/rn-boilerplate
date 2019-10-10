import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import AppContainer from './navigation/AppContainer';
import NavigationService from './navigation/NavigationService';
import { useScreens } from 'react-native-screens';
import { ThemeProvider } from 'react-native-elements';
import appElementsTheme from './theme/appElementsTheme';

useScreens();

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.navigationContainer}>
        <ThemeProvider theme={appElementsTheme}>
          <AppContainer
            ref={ref => NavigationService.setTopLevelNavigator(ref)}
          />
        </ThemeProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
  },
});

export default App;
