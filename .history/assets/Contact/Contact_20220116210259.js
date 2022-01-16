import { StyleSheet, Text, View } from 'react-native'

const Contact = () => {
    return (
        <View style={{ ...styles.container }}>
            <Text style={{ fontSize: 20 }}>Email: jazariastore@gmail.com</Text>
            <Text>Mobile: +92 301 2345 678</Text>
            <Text></Text>
        </View>
    )
}

export default Contact

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
    },

})
