import { StyleSheet, Text, FlatList, View } from 'react-native'
import { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
    const cart = useContext(CartContext)

    return (
        <View>
            <FlatList
                data={cart.cart}
                renderItem={
                    ({ item }) => (
                        <Text>{item.quantity}*{item.name}</Text>
                    )
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})
