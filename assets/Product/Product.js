import React, { useContext } from "react"
import { Center, Heading, Button } from "native-base"
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS } from "../Const/color"
import { CartContext } from '../Cart/CartContext'

const Product = (props) => {
    const cart = useContext(CartContext)
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
                    onPress={() => cart.cartHandler(product)}
                    style={{ ...styles.cardButton }} _text={{
                        color: COLORS.dPink,
                        fontSize: "xl"
                    }}>
                    To Cart
                </Button>
                <Heading style={{ marginVertical: 10 }}>{product.name}</Heading>
                <Text style={{ fontSize: 23, color: '#A9A9A9' }}>PKR {product.price}</Text>
                <Text style={{ fontSize: 20 }}>{product.description}</Text>

            </Center>
        </View >
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
