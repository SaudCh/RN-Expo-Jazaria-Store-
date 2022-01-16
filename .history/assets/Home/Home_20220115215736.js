import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
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
        <View>
            {data.map((e) => {
                <Card />
            })}
        </View>
    )
}
