import { useEffect, useRef } from 'react';
import SplashScreen from 'react-native-splash-screen';

function SplashContainer({ navigation }) {
  const TIME_TO_NAVIGATE = 500;
  const navigationRef = useRef(navigation);

  useEffect(() => {
    const timeout = setTimeout(() => {
      SplashScreen.hide();
      navigationRef.current.navigate('HomeStack');
    }, TIME_TO_NAVIGATE);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return null;
}

export default SplashContainer;
