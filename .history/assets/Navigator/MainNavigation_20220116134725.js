import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from './CustomDrawer';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { COLORS } from '../Const/color';
import DrawerNavigation from './DrawerNavigation';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Stack = createStackNavigator()

export default function StackNavigation(props) {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Drawer" drawerContent={(props) => <DrawerContent {...props} />}>
                <Stack.Screen name="Login" component={Login} options={{ title: 'Authenticate', headerTintColor: COLORS.dPink, }} />
                <Stack.Screen name="Signup" component={Signup} options={{ title: 'Authenticate', headerTintColor: COLORS.dPink, }} />
                <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Product" options={({ route }) => ({ title: route.params.name, headerTintColor: COLORS.dPink, })} >
                    <Product route={route} />
                </Stack.Screen>
                <Stack.Screen name="Cart" component={Cart} options={{ title: 'Your Cart', headerTintColor: COLORS.dPink, }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}