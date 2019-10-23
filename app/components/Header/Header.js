import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from '../../helpers/StatusBarHeight';

const height = getStatusBarHeight();

function Header({
  leftComponent = <View style={{ paddingLeft: 15, flex: 1 }} />,
  centerComponent = <View style={{ flex: 1 }} />,
  rightComponent = <View style={{ paddingRight: 15, flex: 1 }} />,
}) {
  return (
    <View style={styles.headerContainer}>
      {leftComponent}
      {centerComponent}
      {rightComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'blue',
    height: 40 + height,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? height : 0,
  },
});

export default Header;
