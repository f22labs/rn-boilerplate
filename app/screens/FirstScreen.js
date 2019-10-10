import React from 'react';
import { Text } from 'react-native';
import Colors from '../theme/Colors';
import {
  StyledHeader,
  ScreenWithHeader,
} from '../styled_components/StyledCommon';
import HeaderCenter from '../components/Header/HeaderCenter';

function FirstScreen({ navigation }) {
  return (
    <ScreenWithHeader>
      <StyledHeader centerComponent={<HeaderCenter title="First" />} />
      <Text
        onPress={() => navigation.navigate('SecondScreen')}
        style={{ color: Colors.red }}>
        First Screen
      </Text>
    </ScreenWithHeader>
  );
}

export default FirstScreen;
