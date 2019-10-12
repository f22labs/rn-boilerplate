import React from 'react';
import Touchable from '../helpers/Touchable';
import FastImage from 'react-native-fast-image';
import { ActivityIndicator } from 'react-native';

const appElementsTheme = {
  Button: {
    TouchableComponent: Touchable,
  },
  Image: {
    ImageComponent: FastImage,
    PlaceholderContent: <ActivityIndicator />,
  },
};

export default appElementsTheme;
