import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import { fireStore, auth } from '../../firebase'


const History = () => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState("")
    useEffect(() => {
        fetchData()
        return () => {

        }
    }, []);

    const fetchData = () => {
        var newArray = [];
        fireStore.collection('Order')
            .where("email", "==", auth.currentUser?.email)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    let newProd = documentSnapshot.data()
                    newProd['id'] = documentSnapshot.id
                    newArray.push(newProd);
                });
                setData(newArray);
                console.log("Hello" + auth.currentUser?.email)
                console.log(data)
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false)
                console.log('Experiment completed');
            });
    }
    return (
        <View>
            {isLoading ? (
                <View style={{ ...styles.activityContainer }}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            ) : (<FlatList
                data={filterData.cart}
                renderItem={
                    ({ item }) => (
                        <Text>{item.name}</Text>
                    )
                }
                keyExtractor={item => item.id}
            />)
            }
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    activityContainer: {
        height: 400,
        alignContent: "center",
        justifyContent: "center",
    },
});