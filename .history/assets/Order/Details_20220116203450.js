import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'native-base'
import { COLORS } from '../Const/color'
import { Button } from "native-base"
import { CartContext } from '../Cart/CartContext'
import { fireStore } from '../../firebase'


const Details = () => {
    const cart = useContext(CartContext)
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const [cvc, setCvc] = useState("")

    const fs = fireStore().collection("Order")

    const confirmOrder = () => {
        fire.doc(table).set({
            name: name,
            number: number,
            expiryDate: data,
            cart = cart.cart,
            time: d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()

        })
            .then(() => {
                console.log('Document successfully written!');
            })
            .catch((error) => {
                console.error('Error writing document: ', error);
            });
    }

    return (
        <View style={{ ...styles.container }}>
            <Text style={{ color: COLORS.dPink, fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Card Details</Text>
            <View>
                <Text style={{ ...styles.inputText }}>Name</Text>
                <Input
                    variant="underlined"
                    placeholder="Full Name"
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View>
                <Text style={{ ...styles.inputText }}>CARD NUMBER</Text>
                <Input variant="underlined"
                    placeholder="1234 5678 1234"
                    value={number}
                    onChangeText={setNumber}
                />
            </View>
            <View>
                <Text style={{ ...styles.inputText }}>Expiry</Text>
                <Input variant="underlined"
                    placeholder="MM/YY"
                    value={date}
                    onChangeText={setDate}
                />
            </View>
            <View>
                <Text style={{ ...styles.inputText }}>CVC/CCV</Text>
                <Input variant="underlined"
                    placeholder="CVC"
                    value={cvc}
                    onChangeText={setCvc}
                />
            </View>
            <Button onPress={() => confirmOrder()} style={{ marginTop: 10 }}>
                Proceed to Payment
            </Button>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 20,
        borderRadius: 10,

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
