import React from 'react';
import { View } from 'react-native';
import Header from './Header';

function ScreenWithHeader({
  leftComponent,
  centerComponent,
  rightComponent,
  children,
}) {
  return (
    <View>
      <Header
        leftComponent={leftComponent}
        centerComponent={centerComponent}
        rightComponent={rightComponent}
      />
      {children}
    </View>
  );
}

export default ScreenWithHeader;
