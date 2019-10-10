import React from 'react';
import styled from 'styled-components/native';
import {Header} from 'react-native-elements';

const headerContainerStyle = {
  position: 'absolute',
  top: 0,
  width: '100%',
};

export const StyledHeader = props => (
  <Header {...props} containerStyle={headerContainerStyle} />
);
