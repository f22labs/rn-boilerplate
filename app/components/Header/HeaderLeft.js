import React from 'react';
import { Text, View } from 'react-native';
import Touchable from '../../helpers/Touchable';
function HeaderLeft({ onPress = () => {}, title = '' }) {
  return (
    <View style={{ paddingLeft: 10, flex: 1, alignItems: 'flex-start' }}>
      <Touchable
        style={{ width: 45, alignItems: 'center' }}
        onPress={() => onPress()}>
        <Text>{title}</Text>
      </Touchable>
    </View>
  );
}

export default HeaderLeft;
