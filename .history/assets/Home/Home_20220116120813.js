import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { fireStore } from '../../firebase'
import Card from './Card'

export default function Home() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);

    var newArray = [];

    useEffect(() => {
        fireStore.collection('products')
            .get()
            .then(querySnapshot => {
                //console.log('Total users: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    newArray.push(documentSnapshot.data());
                    //console.log(newArray)
                });
                setLoading(flase)
                setData(newArray);

            })
            .catch()
            .finally(() => {
                setLoading(flase)
            })
            ;
        //console.log(data)
    }, []);

    return (
        <View style={{ height: "100%" }}>
            {isLoading ? (
                <View style={{ ...styles.activityContainer }}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            ) : (<FlatList
                data={data}
                renderItem={
                    ({ item }) => (
                        <Card data={item} />
                    )
                }
                keyExtractor={item => item.id}
            />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    activityContainer: {
        height: 400,
        alignContent: "center",
        justifyContent: "center",
    },
});
