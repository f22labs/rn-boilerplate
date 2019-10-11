import React, { createContext, useState, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import Colors from '../theme/Colors';
export const LoaderContext = createContext();

function LoaderProvider({ children }) {
  const [showLoader, setShowLoader] = useState(false);
  const [component, setComponent] = useState(
    <ActivityIndicator size="large" color={Colors.white} />,
  );
  const value = useMemo(
    () => ({
      showLoader,
      setShowLoader,
      component,
      setComponent,
    }),
    [showLoader, setShowLoader, component, setComponent],
  );

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
}

export default LoaderProvider;
