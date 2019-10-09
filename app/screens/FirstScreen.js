import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Colors from '../Colors';
import {Header} from 'react-native-elements';

function FirstScreen({navigation}) {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Header />
      <Text
        onPress={() => navigation.navigate('SecondScreen')}
        style={{color: Colors.red}}>
        First Screen
      </Text>
    </SafeAreaView>
  );
}

export default FirstScreen;
