import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { fireStore } from '../../firebase'
import Card from './Card'

export default function Home() {

    useEffect(() => {
        fireStore.collection('deals')
            .get()
            .then(querySnapshot => {
                //console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    newArray.push(documentSnapshot.data());
                });
                setData(newArray);
            });
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Card />
        </View>
    )
}
