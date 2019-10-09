import React, {useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

function SplashScreen({navigation}) {
  const TIME_TO_NAVIGATE = 500;

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('HomeStack');
    }, TIME_TO_NAVIGATE);
  }, [navigation]);

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
