import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Header } from 'react-native-elements';
import { Platform, View, Text, Animated, Easing } from 'react-native';
import { getStatusBarHeight } from '../helpers/StatusBarHeight';
import { useNetInfo } from '@react-native-community/netinfo';
import Colors from '../theme/Colors';
export const mainContentPadding =
  Platform.select({
    android: 50,
    default: 44,
  }) + getStatusBarHeight();

const headerContainerStyle = {
  position: 'absolute',
  top: 0,
  zIndex: 999,
  width: '100%',
  height: Platform.OS === 'ios' ? mainContentPadding : mainContentPadding - 10,
  paddingBottom: Platform.OS === 'ios' ? 0 : 10,
};

export const StyledHeader = props => {
  const netInfo = useNetInfo();
  console.log(netInfo);
  const [heightAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
  useEffect(() => {
    if (!netInfo.isConnected) {
      Animated.timing(heightAnim, {
        toValue: 25,
        duration: 300,
      }).start();
    } else {
      Animated.timing(heightAnim, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  }, [netInfo.isConnected]);

  return (
    <>
      <Header {...props} containerStyle={headerContainerStyle} />
      {!netInfo.isConnected && (
        <Animated.View
          style={{
            backgroundColor: Colors.alertError,
            alignItems: 'center',
            height: heightAnim,
          }}>
          <Text style={{ fontSize: 12, padding: 5, color: Colors.white }}>
            Your device is offline
          </Text>
        </Animated.View>
      )}
    </>
  );
};

export const ScreenWithHeader = styled.View`
  padding-top: ${Platform.OS === 'ios'
    ? mainContentPadding
    : mainContentPadding - 10};
`;
