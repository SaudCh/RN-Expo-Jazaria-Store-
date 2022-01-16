import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './CustomDrawer';
import { Button } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import Home from '../Home/Home'
import { COLORS } from '../Const/color';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    const navigation = useNavigation()
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
                        <Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" />
                    </Button>)
            }} />


        </Drawer.Navigator>
    );
}