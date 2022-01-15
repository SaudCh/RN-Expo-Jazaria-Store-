import { StatusBar } from 'expo-status-bar';
import { Button, View } from 'react-native';
import { StyleSheet, Textx } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <NativeBaseProvider theme={theme}>
      <StackNavigation />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
