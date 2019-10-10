import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {StyledHeader} from '../styled_components/StyledCommon';

function SecondScreen({navigation}) {
  return (
    <SafeAreaView>
      {/* <StyledHeader /> */}
      <Text onPress={() => navigation.goBack()}>Second Screen</Text>
    </SafeAreaView>
  );
}

export default SecondScreen;
