import React from 'react';
import { Text } from 'react-native';
import {
  StyledHeader,
  ScreenWithHeader,
} from '../styled_components/StyledCommon';

import HeaderLeft from '../components/Header/HeaderLeft';
import HeaderRight from '../components/Header/HeaderRight';
import HeaderCenter from '../components/Header/HeaderCenter';

function SecondScreen({ navigation }) {
  return (
    <ScreenWithHeader>
      <StyledHeader
        leftComponent={<HeaderLeft onPress={navigation.goBack} title="back" />}
        centerComponent={<HeaderCenter title="Second" />}
        rightComponent={<HeaderRight title="Done" />}
      />
      <Text>Second Screen</Text>
    </ScreenWithHeader>
  );
}

export default SecondScreen;
