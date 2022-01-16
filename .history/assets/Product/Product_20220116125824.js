import React from "react"
import { Center, Heading, Button } from "native-base"
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS } from "../Const/color"

const Product = (props) => {
    const { route } = props;
    const { product } = route.params;

    return (
        <View style={{ ...styles.container }}>
            <Image
                style={{ ...styles.img }}
                source={{ uri: product.image }}
            />
            <Center>
                <Button
                    style={{ ...styles.cardButton }} _text={{
                        color: COLORS.dPink,
                        fontSize: "xl"
                    }}>
                    To Cart
                </Button>
                <Heading>{product.name}</Heading>
                <Text style={{ fontSize: 23, color: '#A9A9A9' }}>PKR {product.price}</Text>
            </Center>

        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {

    },
    img: {
        width: 400,
        height: 300,
        alignSelf: 'center'
    },
    cardButton: {
        backgroundColor: 'transparent',
        color: COLORS.dPink,
        marginVertical: 10
    }
});
