import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';
import { COLORS } from "../Const/color";
import { auth } from "../../firebase";

export function DrawerContent(props) {

    const nav = useNavigation()
    const logout = async () => {
        auth.signOut()
        nav.replace("Login")
    };

    const navigate = (screen) => {
        nav.closeDrawer();
        nav.navigate(screen);
    };

    return (
        <View style={{ paddingTop: 39 }}>
            <Button style={{ ...styles.btn }}>
                <View style={{ ...styles.dFlex }}>
                    <Entypo name="shopping-cart" size={24} color="black" />
                    <Text style={{ ...styles.btnText }}>Products</Text>
                </View>
            </Button>

            <Button style={{ ...styles.btn }}>
                <View style={{ ...styles.dFlex }}>
                    <Feather name="list" size={24} color="black" />
                    <Text style={{ ...styles.btnText }}>Orders</Text>
                </View>
            </Button>

            <Button style={{ ...styles.btn }}>
                <View style={{ ...styles.dFlex }}>
                    <Feather name="edit" size={24} color="black" />
                    <Text style={{ ...styles.btnText }}>AR</Text>
                </View>
            </Button>

            <Button onPress={() => navigate("Contact")} style={{ ...styles.btn }}>
                <View style={{ ...styles.dFlex }}>
                    <AntDesign name="contacts" size={24} color="black" />
                    <Text style={{ ...styles.btnText }}>Contact</Text>
                </View>
            </Button>

            <Button onPress={() => logout()} style={{ ...styles.btn, justifyContent: 'center' }}>
                <Text style={{ color: COLORS.dPink }}>Logout</Text>
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    dFlex: {
        flexDirection: 'row',
    },
    btnText: {
        paddingLeft: 50
    },
    btn: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-start'
    }
});