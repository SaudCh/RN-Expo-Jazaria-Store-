import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
    const cart = useContext(CartContext)
    return (
        <View>
            {
                cart.cart.map((e) => {
                    <Text>Hello</Text>
                })
            }
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})
