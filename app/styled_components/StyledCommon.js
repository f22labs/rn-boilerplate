import React from 'react';
import styled from 'styled-components/native';
import { Header } from 'react-native-elements';
import { Platform } from 'react-native';
import { getStatusBarHeight } from '../helpers/StatusBarHeight';

const mainContentPadding =
  Platform.select({
    android: 56,
    default: 44,
  }) + getStatusBarHeight();

const headerContainerStyle = {
  position: 'absolute',
  top: 0,
  zIndex: 999,
  width: '100%',
};

export const StyledHeader = props => (
  <Header {...props} containerStyle={headerContainerStyle} />
);

export const ScreenWithHeader = styled.View`
  padding-top: ${mainContentPadding};
`;
