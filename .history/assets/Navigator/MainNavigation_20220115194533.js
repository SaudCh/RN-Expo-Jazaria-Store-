import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from './DrawerNavigation';
import { Text } from "react-native"
import { Button } from 'native-base';
import { Entypo, Feather } from '@expo/vector-icons';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Home from '../Home/Home'
import { COLORS } from '../Const/color';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

function Root() {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Home} options={{
                title: 'All Products',
                headerTintColor: COLORS.dPink,
                headerRight: () => (
                    <Button
                        onPress={() => alert('This is a button!')}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <Text ><Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" /></Text>
                    </Button>)
            }} />
        </Drawer.Navigator>
    );
}

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Signup" drawerContent={(props) => <DrawerContent {...props} />}>
                <Stack.Screen name="Login" component={Login} options={{ title: 'Authenticate', headerTintColor: COLORS.dPink, }} />
                <Stack.Screen name="Signup" component={Signup} options={{ title: 'Authenticate', headerTintColor: COLORS.dPink, }} />
                <Stack.Screen name="Drawer" component={Root} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}