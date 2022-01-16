import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Input, Center, Button } from "native-base"
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from '../Const/color';
import { auth } from '../../firebase'

export default function Login(props) {
    const { navigation } = props
    const [isLoading, setLoading] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigation()

    useFocusEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                nav.replace("Drawer")
            }
        })

        return unsubscribe
    })

    const signin = () => {
        //console.log(email, password)
        setLoading(true)
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                //console.log(user.email)
                setEmail("")
                setPassword("")
            })
            .catch((error) => console.log(error.message))

        setLoading(false)
    }


    return (
        <View style={{ ...styles.body }}>
            <View style={{ ...styles.box }}>
                <View>
                    <Text style={{ ...styles.inputText }}>E-Mail</Text>
                    <Input variant="underlined" placeholder="Email" value={email}
                        onChangeText={setEmail} />
                </View>
                <View>
                    <Text style={{ ...styles.inputText }}>Password</Text>
                    <Input
                        variant="underlined"
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry />
                </View>
                <View>
                    <Center>
                        {isLoading ? (
                            <View style={{ ...styles.activityContainer }}>
                                <ActivityIndicator size="large" color="red" />
                            </View>
                        ) : <Button onPress={() => signin()} style={{ backgroundColor: 'transparent' }}>
                            <Text style={{ ...styles.bottomText, color: COLORS.dPink }}>Login</Text>
                        </Button>}

                        <Button onPress={() => navigation.replace('Signup')} style={{ backgroundColor: 'transparent' }}>
                            <Text style={{ ...styles.bottomText, color: COLORS.yellow }}>Switch to Sign Up</Text>
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
