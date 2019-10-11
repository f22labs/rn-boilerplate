import React from 'react';
import {useWindowDimensions, View} from 'react-native'
import useLoader from '../../hooks/useLoader';
import Colors from '../../theme/Colors'


export default function Loader() {
  const {width,height}=useWindowDimensions()
  const { showLoader,component,setComponent } = useLoader();
  
  if(showLoader)return (
    <View
      style={{
        position: 'absolute',
        zIndex: 999,
        height,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.overlay
      }}>
      {component}
    </View>
  ); else return null
}