import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'native-base'

const Details = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const [cvc, setCvc] = useState("")

    return (
        <View>
            <View>
                <Text style={{ ...styles.inputText }}>Name</Text>
                <Input variant="underlined"
                    placeholder="Full Name"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <View>
                <Text style={{ ...styles.inputText }}>CARD NUMBER</Text>
                <Input variant="underlined"
                    placeholder="1234 5678 1234"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})
