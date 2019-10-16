import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import Colors from '../theme/Colors';
// import { ScreenWithHeader } from '../styled_components/StyledCommon';
import Header from '../components/Header/Header';
import HeaderCenter from '../components/Header/HeaderCenter';
import { Image } from 'react-native-elements';
import HeaderLeft from '../components/Header/HeaderLeft';
import HeaderRight from '../components/Header/HeaderRight';
import ScreenWithHeader from '../components/Header/ScreenWithHeader';

function FirstScreen({ navigation }) {
  return (
    <ScreenWithHeader centerComponent={<HeaderCenter title="Main" />}>
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
