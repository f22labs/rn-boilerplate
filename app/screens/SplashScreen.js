import React, { useEffect, useRef } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

function SplashScreen({ navigation }) {
  const TIME_TO_NAVIGATE = 500;
  const navigationRef = useRef(navigation);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigationRef.current.navigate('HomeStack');
    }, TIME_TO_NAVIGATE);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <SafeAreaView style={styles.splashContainer}>
      {/* Splash Screen styles */}
      <Text>SplashScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
