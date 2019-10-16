import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Header } from 'react-native-elements';
import { Platform, Text, Animated } from 'react-native';
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
