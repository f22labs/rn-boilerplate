import React from 'react';
import { Button } from 'react-native-elements';

function HeaderLeft({ onPress = () => {}, title = '' }) {
  return <Button onPress={() => onPress()} title={title} />;
}

export default HeaderLeft;
