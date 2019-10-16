import React from 'react';
import { View, StyleSheet } from 'react-native';
import { getStatusBarHeight } from '../../helpers/StatusBarHeight';

const height = getStatusBarHeight();

function Header({ leftComponent, centerComponent, rightComponent }) {
  console.log(height);
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
    backgroundColor: 'red',
    height: 40 + height,
    justifyContent: 'space-between',
    paddingTop: height,
  },
});

export default Header;
