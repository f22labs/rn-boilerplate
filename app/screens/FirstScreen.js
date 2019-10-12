import React from 'react';
import { Text } from 'react-native';
import Colors from '../theme/Colors';
import {
  StyledHeader,
  ScreenWithHeader,
} from '../styled_components/StyledCommon';
import HeaderCenter from '../components/Header/HeaderCenter';
import { Image } from 'react-native-elements';

function FirstScreen({ navigation }) {
  return (
    <ScreenWithHeader>
      <StyledHeader centerComponent={<HeaderCenter title="First" />} />
      <Text
        onPress={() => navigation.navigate('SecondScreen')}
        style={{ color: Colors.red }}>
        First Screen
      </Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: 'https://unsplash.it/200/200?image=1',
        }}
      />
    </ScreenWithHeader>
  );
}

export default FirstScreen;
