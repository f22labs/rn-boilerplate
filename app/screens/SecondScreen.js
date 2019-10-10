import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import Colors from '../theme/Colors';

function SecondScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigation.goBack()} style={{ color: Colors.red }}>
        Second Screen
      </Text>
    </SafeAreaView>
  );
}

export default SecondScreen;
