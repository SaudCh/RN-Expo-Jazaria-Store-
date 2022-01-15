import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Input, Center, Button } from "native-base"

import { COLORS } from '../Const/color';
import { auth } from '../../firebase'

export default function Signup(props) {
    const { navigation } = props

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("Drawer")
            }
        })

        return unsubscribe
    }, [])

    const register = () => {
        console.log(email, password)
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email)
                setEmail("")
                setPassword("")
            })
            .catch((error) => console.log(error.message))
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
                        <Button onPress={() => navigation.replace('Login')} style={{ backgroundColor: 'transparent' }}>
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
