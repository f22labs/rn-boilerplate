import React, { useRef } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import AppContainer from './navigation/AppContainer';
import NavigationService from './navigation/NavigationService';
import { useScreens } from 'react-native-screens';
import { ThemeProvider } from 'react-native-elements';
import appElementsTheme from './theme/appElementsTheme';
import DropDownProvider from './Providers/DropDownProvider';
import AlertMessage from './components/AlertMessage/AlertMessage';
import LoaderProvider from './Providers/LoaderProvider';
import Loader from './components/Loader/Loader';

useScreens();

function App() {
  const dropdownRef = useRef(null);
  return (
    <>
      <AlertMessage ref={dropdownRef} />
      <StatusBar barStyle="dark-content" />
      <View style={styles.navigationContainer}>
        <ThemeProvider theme={appElementsTheme}>
          <DropDownProvider dropdownRef={dropdownRef}>
            <LoaderProvider>
              <AppContainer
                ref={ref => NavigationService.setTopLevelNavigator(ref)}
              />
              <Loader></Loader>
            </LoaderProvider>
          </DropDownProvider>
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
