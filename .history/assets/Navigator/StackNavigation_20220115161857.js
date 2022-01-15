import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from "./Drawer";

import { DrawerContent } from './DrawerNavigation';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const Drawer = createDrawerNavigator();

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Signup" drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Signup" component={Signup} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}