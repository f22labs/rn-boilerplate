import React from 'react';
import { View, Platform } from 'react-native';
import Colors from '../../theme/Colors';
import DropdownAlert from 'react-native-dropdownalert';
import { mainContentPadding } from '../../styled_components/StyledCommon';

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
        height: Platform.OS === 'ios' ? 20 : 32,
        fontSize: 14,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        color: '#fff',
      }}
      containerStyle={{
        alignItems: 'flex-end',
        height: mainContentPadding,
        padding: 10,
      }}
      renderImage={() => <View />}
      infoImageSrc={null}
    />
  );
});

export default AlertMessage;
