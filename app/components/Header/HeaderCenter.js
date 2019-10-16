import React from 'react';
import { Text, View } from 'react-native';

function HeaderCenter({ title = '' }) {
  return (
    <View>
      <Text> {title}</Text>
    </View>
  );
}

export default HeaderCenter;
