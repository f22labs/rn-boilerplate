import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

function SplashContainer({ setLoading }) {
  const TIME_TO_NAVIGATE = 500;

  useEffect(() => {
    const timeout = setTimeout(() => {
      SplashScreen.hide();
      setLoading(false);
    }, TIME_TO_NAVIGATE);

    return () => {
      clearTimeout(timeout);
    };
  }, [setLoading]);

  return null;
}

export default SplashContainer;
