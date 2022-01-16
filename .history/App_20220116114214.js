import { extendTheme, NativeBaseProvider } from 'native-base';
import StackNavigation from './assets/Navigator/MainNavigation';
import React, { useState, useContext } from 'react';

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

  const cartHandler = (prod) => {
    //console.log(prod);
    let newProd = prod
    newProd['quantity'] = 1
    setCart((product) => [...product, newProd]);
    //console.log(cart);
  };
  const removeCart = (id) => {
    //console.log(id);
    setCart((c) => {
      return c.filter((ca) => ca.id !== id);
    });
  };

  return (
    <NativeBaseProvider theme={theme}>
      <StackNavigation cart={cart} />
    </NativeBaseProvider>
  );
}
export default App