import { useNetInfo } from '@react-native-community/netinfo';
import Colors from '../../theme/Colors';

import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';

function NetInfo() {
  const netInfo = useNetInfo();
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
  }, [netInfo.isConnected, heightAnim]);
  return (
    <View>
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
    </View>
  );
}

export default NetInfo;
