import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, View } from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import { Entypo, Feather } from '@expo/vector-icons';
import { COLORS } from "../Const/color";
import { auth } from "../../firebase";

export function DrawerContent(props) {

    // const [user, setUser] = useState("");
    // const navigate = (screen) => {
    //     props.navigation.closeDrawer();
    //     props.navigation.navigate(screen);
    // };
    // const navigateHome = () => {
    //     props.navigation.closeDrawer();
    //     props.navigation.navigate("Main", { screen: "Home" });
    // };

    const logout = async () => {
        auth.signOut()
        props.navigation.navigate("Login")
    };

    // useFocusEffect(
    //     React.useCallback(() => {
    //         AsyncStorage.getItem("@user_id").then((val) => {
    //             if (val) {
    //                 //console.log(val);
    //                 setUser(val);
    //                 //setTable(val);
    //             } else {
    //                 //setTable("0");
    //                 setUser("0");
    //             }
    //         });
    //     })
    // );

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