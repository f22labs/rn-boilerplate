import React from 'react';
import Touchable from '../helpers/Touchable';
import { ActivityIndicator } from 'react-native';

const appElementsTheme = {
  Button: {
    TouchableComponent: Touchable,
  },
  Image: {
    PlaceholderContent: <ActivityIndicator />,
  },
};

export default appElementsTheme;
