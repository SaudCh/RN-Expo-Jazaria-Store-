import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './DrawerNavigation';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Home from '../Home/Home'

const Drawer = createDrawerNavigator();

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Signup" drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Drawer.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}