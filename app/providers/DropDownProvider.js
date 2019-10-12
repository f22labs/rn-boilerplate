import React, { createContext } from 'react';

export const DropDownContext = createContext();

function DropDownProvider({ children, dropdownRef }) {
  function showAlert(
    alertType = 'error',
    alertMessage = 'Something went wrong',
    interval = 3000,
  ) {
    dropdownRef.current.alertWithType(
      alertType,
      '',
      alertMessage,
      '',
      interval,
    );
  }
  return (
    <DropDownContext.Provider value={{ showAlert }}>
      {children}
    </DropDownContext.Provider>
  );
}

export default DropDownProvider;
