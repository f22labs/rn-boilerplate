import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import NetInfo from '../NetInfo/NetInfo';

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
      <NetInfo />
      {children}
    </View>
  );
}

export default ScreenWithHeader;
