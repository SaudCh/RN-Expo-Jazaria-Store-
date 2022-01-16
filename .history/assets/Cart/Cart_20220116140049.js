import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
    const cart = useContext(CartContext)
    console.log(cart)
    return (
        <View>
            <Text>{cart.cart[0].name}</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})
