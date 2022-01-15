import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../Const/color';
//import { useNavigation } from '@react-navigaton/core'
import { Input, Center, Button } from "native-base"
import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase'

export default function Login(props) {
    const { navigation } = props

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("131")

    //const navigate = useNavigation()
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("Home")
            }
        })

        return unsubscribe
    }, [])

    const signin = () => {
        console.log(email, password)
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email)
            })
            .catch((error) => console.log(error.message))
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
                        <Button onPress={() => signin()} style={{ backgroundColor: 'transparent' }}>
                            <Text style={{ ...styles.bottomText, color: COLORS.dPink }}>Login</Text>
                        </Button>
                        <Button onPress={() => navigation.navigate('Signup')} style={{ backgroundColor: 'transparent' }}>
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
