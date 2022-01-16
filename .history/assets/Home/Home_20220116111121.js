import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { fireStore } from '../../firebase'
import Card from './Card'

export default function Home() {
    const [data, setData] = useState([])

    var newArray = [];

    useEffect(() => {
        fireStore.collection('products')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    newArray.push(documentSnapshot.data());
                    //console.log(newArray)
                });
                setData(newArray);
            });
        console.log(data)
    }, []);

    return (
        <View style={{ height: "100%" }}>
            <FlatList
                data={data}
                renderItem={
                    ({ item }) => (
                        <Card data={item} />
                    )
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}
