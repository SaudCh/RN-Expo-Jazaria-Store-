import { extendTheme, NativeBaseProvider } from 'native-base';
import StackNavigation from './assets/Navigator/MainNavigation';
import React, { useState } from 'react';

function App() {

  const myTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };

  const theme = extendTheme({ colors: myTheme });

  const [cart, setCart] = useState([])

  return (
    <NativeBaseProvider theme={theme}>
      <StackNavigation />
    </NativeBaseProvider>
  );
}
export default App