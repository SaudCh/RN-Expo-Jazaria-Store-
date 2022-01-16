import { StyleSheet, Text, FlatList, View } from 'react-native'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from './CartContext'
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from 'native-base'
import { COLORS } from '../Const/color';


const Cart = () => {
    const cart = useContext(CartContext)

    if (cart.cart.length === 0) {
        return (
            <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.dPink }}>The Cart is Empty</Text>
            </View>
        )
    }

    const [total, setTotal] = useState(0);
    useEffect(() => {
        let tot = 0;
        cart.cart.map((e) => (tot = parseInt(e.price) * e.quantity + tot));
        setTotal(tot);
    }, [cart.cart]);

    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ ...styles.totalContainer }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total: <Text style={{ color: COLORS.dPink }}>PKR {total}</Text></Text>
                <Button style={{ backgroundColor: 'transparent' }} _text={{
                    color: COLORS.yellow,
                    fontSize: "xl"
                }}>
                    Order Now
                </Button>
            </View>
            <FlatList
                data={cart.cart}
                renderItem={
                    ({ item }) => (
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 5 }}>
                            <Text style={{ color: '#A5A5A5' }}>{item.quantity} </Text>
                            {item.name} PKR {item.price}{" "}
                            <Button style={{ backgroundColor: 'transparent', }} onPress={() => cart.removeCart(item.id)}>
                                <FontAwesome5 style={{ marginTop: 10 }} name="trash" size={20} color="#FF0000" />
                            </Button>

                        </Text>
                    )
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        padding: 20,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 10,
    }
})
