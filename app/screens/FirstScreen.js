import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Colors from '../Colors';
import {StyledHeader} from '../styled_components/StyledCommon';

function FirstScreen({navigation}) {
  return (
    <SafeAreaView>
      {/* <StyledHeader /> */}
      <Text
        onPress={() => navigation.navigate('SecondScreen')}
        style={{color: Colors.red}}>
        First Screen
      </Text>
    </SafeAreaView>
  );
}

export default FirstScreen;
