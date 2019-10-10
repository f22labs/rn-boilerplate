import React from 'react';
import { Button } from 'react-native-elements';

function HeaderRight({ title = '', onPress = () => {} }) {
  return <Button onPress={() => onPress()} title={title} />;
}

export default HeaderRight;
