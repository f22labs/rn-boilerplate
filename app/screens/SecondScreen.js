import React from "react";
import { Text } from "react-native";
import {
  StyledHeader,
  ScreenWithHeader
} from "../styled_components/StyledCommon";
import Colors from "../theme/Colors";

function SecondScreen({ navigation }) {
  return (
    <ScreenWithHeader>
      <StyledHeader />
      <Text onPress={() => navigation.goBack()}>Second Screen</Text>
    </ScreenWithHeader>
  );
}

export default SecondScreen;
