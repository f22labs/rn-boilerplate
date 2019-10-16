import React from 'react';
import { Text, View } from 'react-native';
import Touchable from '../../helpers/Touchable';

function HeaderRight({ onPress = () => {}, title = '' }) {
  return (
    <View style={{ paddingRight: 10, flex: 1, alignItems: 'flex-end' }}>
      <Touchable
        style={{ width: 45, alignItems: 'center' }}
        onPress={() => onPress()}>
        <Text>{title}</Text>
      </Touchable>
    </View>
  );
}

export default HeaderRight;
