import React from 'react';
import { View, Dimensions } from 'react-native';
import useLoader from '../../hooks/useLoader';
import Colors from '../../theme/Colors';
const { width, height } = Dimensions.get('window');

export default function Loader() {
  const { showLoader, component } = useLoader();

  if (showLoader)
    return (
      <View
        style={{
          position: 'absolute',
          zIndex: 999,
          height,
          width,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.overlay,
        }}>
        {component}
      </View>
    );
  else return null;
}
