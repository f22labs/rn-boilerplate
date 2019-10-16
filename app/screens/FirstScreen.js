import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import Colors from '../theme/Colors';
import { ScreenWithHeader } from '../styled_components/StyledCommon';
import Header from '../components/Header/Header';
import HeaderCenter from '../components/Header/HeaderCenter';
import { Image } from 'react-native-elements';

function FirstScreen({ navigation }) {
  return (
    <View>
      <Header />
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
    </View>
  );
}

export default FirstScreen;
