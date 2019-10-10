import React from 'react';
import { View } from 'react-native';
import Colors from '../../theme/Colors';
import DropdownAlert from 'react-native-dropdownalert';

const AlertMessage = React.forwardRef((props, ref) => {
  return (
    <DropdownAlert
      ref={ref}
      zIndex={1000}
      imageStyle={{ width: 0, height: 0 }}
      errorColor={Colors.alertError}
      successColor={Colors.alertSuccess}
      useNativeDriver
      messageStyle={{
        height: 36,
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
      }}
      containerStyle={{
        alignItems: 'flex-end',
        height: 58,
        padding: 0,
      }}
      renderImage={() => <View />}
      infoImageSrc={null}
    />
  );
});

export default AlertMessage;
