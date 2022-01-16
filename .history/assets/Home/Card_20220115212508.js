import React from "react"
import { Center, Heading, Button } from "native-base"
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS } from "../Const/color"

const Card = () => {
    return (
        <View style={{ ...styles.container }}>
            <Image
                style={{ ...styles.img }}
                source={require('../icon.png')}
            />
            <Center>
                <Heading>Name</Heading>
                <Text>PKR 150000</Text>
            </Center>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button style={{ ...styles.cardButton }}>
                    View Details
                </Button>
                <Button>
                    To Cart
                </Button>
            </View>
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
    },
    img: {
        width: 300,
        height: 200
    }
});