import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, View } from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';

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

    // const logOut = async () => {
    //     try {
    //         await AsyncStorage.setItem("@user_id", "0");
    //         props.navigation.navigate("Main");
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         //setLoading(true);
    //     }
    // };

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
        <View>
            <Button style={{ ...styles.btns }}>
                <Text><Entypo name="shopping-cart" size={24} color="black" /></Text>
                <Text>Products</Text>
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    btns: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row'
    }
});