import { StyleSheet, Text, View } from 'react-native'

const Product = (props) => {
    const { route } = props;
    const { item } = route.params;

    return (
        <View>
            <Text>{route}</Text>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({})
