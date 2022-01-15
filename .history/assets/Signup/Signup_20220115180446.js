import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../Const/color';
import { Input, Center, Button } from "native-base"
import React, { useState } from "react";

export default function Signup(props) {
    const { navigation } = props

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("131")

    const register = () => {
        console.log(email, password)
    }

    return (
        <View style={{ ...styles.body }}>
            <View style={{ ...styles.box }}>
                <View>
                    <Text style={{ ...styles.inputText }}>E-Mail</Text>
                    <Input
                        variant="underlined"
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View>
                    <Text style={{ ...styles.inputText }}>Password</Text>
                    <Input variant="underlined"
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                <View>
                    <Center>
                        <Button onPress={() => register()} style={{ backgroundColor: 'transparent' }}>
                            <Text style={{ ...styles.bottomText, color: COLORS.dPink }}>Sign Up</Text>
                        </Button>
                        <Button onPress={() => navigation.navigate('Login')} style={{ backgroundColor: 'transparent' }}>
                            <Text style={{ ...styles.bottomText, color: COLORS.yellow }}>Switch to Login</Text>
                        </Button>
                    </Center>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: COLORS.lPink
    },
    box: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 10,

        backgroundColor: COLORS.white,
        padding: 20,
        width: 300
    },
    inputText: {
        fontWeight: 'bold'
    },
    bottomText: {
        fontSize: 20
    }
});
