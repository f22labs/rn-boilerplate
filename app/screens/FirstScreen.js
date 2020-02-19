import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../theme/Colors';
import { Image } from 'react-native-elements';

function FirstScreen({ navigation }) {
  return (
    <View>
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
