import React from "react"
import {
    Center, Heading
} from "native-base"
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from "../Const/color"

const Card = () => {
    return (
        <View>
            <Heading>Name</Heading>
        </View>
    )
}

export default Card
const styles = StyleSheet.create({
    container: {
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
    }
});