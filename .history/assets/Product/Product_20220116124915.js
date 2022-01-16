import { StyleSheet, Text, View } from 'react-native'

const Product = (props) => {
    const { route } = props;
    const { product } = route.params;

    return (
        <View>
            <Text>{product.name}</Text>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({})
