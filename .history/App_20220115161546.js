import { extendTheme, NativeBaseProvider } from 'native-base';
import StackNavigation from './assets/Navigator/StackNavigation';

function App() {

  const myTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };

  const theme = extendTheme({ colors: myTheme });
  return (
    <NativeBaseProvider theme={theme}>
      <StackNavigation />
    </NativeBaseProvider>
  );
}
export default App