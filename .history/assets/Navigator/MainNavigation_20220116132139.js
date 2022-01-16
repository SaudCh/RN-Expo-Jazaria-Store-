import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from './CustomDrawer';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { COLORS } from '../Const/color';
import DrawerNavigation from './DrawerNavigation';
import Product from '../Product/Product';


const Stack = createStackNavigator()

export default function StackNavigation(props) {

    const { cart, cartHandler, removeCart } = props
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Drawer" drawerContent={(props) => <DrawerContent {...props} />}>
                <Stack.Screen name="Login" component={Login} options={{ title: 'Authenticate', headerTintColor: COLORS.dPink, }} />
                <Stack.Screen name="Signup" component={Signup} options={{ title: 'Authenticate', headerTintColor: COLORS.dPink, }} />
                <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Product" component={Product} options={({ route }) => ({ title: route.params.name, headerTintColor: COLORS.dPink, })} />
                <Stack.Screen name="Cart" component={Product} options={{ title: 'Your Cart', headerTintColor: COLORS.dPink, }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}