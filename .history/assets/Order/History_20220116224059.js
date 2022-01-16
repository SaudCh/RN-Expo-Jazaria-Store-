import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { fireStore, auth } from '../../firebase'
import { useFocusEffect } from '@react-navigation/native'


const History = () => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState("")
    useFocusEffect(() => {
        fetchData()
        return () => {

        }
    });

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
                //console.log(new Date(newArray[2].time))
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false)
            });
    }

    const date = (d) => {
        const dt = new Date(d)
        return dt.getDate()
    }
    return (
        <View style={{ margin: 10 }}>
            {isLoading ? (
                <View style={{ ...styles.activityContainer }}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            ) : (
                <FlatList
                    data={data}
                    renderItem={
                        ({ item }) => (
                            <View style={{ ...styles.card }}>
                                {<Text style={{ marginVertical: 5 }}>{date(item.time.nanoseconds)}</Text>}
                                <FlatList
                                    data={item.cart}
                                    renderItem={
                                        ({ item }) => (

                                            <Text style={{ fontSize: 17 }}>{item.quantity} {item.name} PKR {item.price}</Text>

                                        )
                                    }
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        )
                    }
                    keyExtractor={item => item.id}
                />
            )
            }
        </View >
    )
}

export default History

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,

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
    },
    activityContainer: {
        height: 400,
        alignContent: "center",
        justifyContent: "center",
    },
});