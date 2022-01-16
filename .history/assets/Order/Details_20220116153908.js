import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'native-base'

const Details = () => {
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
                    placeholder="Password"
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
