import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from './CustomDrawer';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { COLORS } from '../Const/color';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator()

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Drawer" drawerContent={(props) => <DrawerContent {...props} />}>
                <Stack.Screen name="Login" component={Login} options={{ title: 'Authenticate', headerTintColor: COLORS.dPink, }} />
                <Stack.Screen name="Signup" component={Signup} options={{ title: 'Authenticate', headerTintColor: COLORS.dPink, }} />
                <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}