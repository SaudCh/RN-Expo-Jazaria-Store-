import { Input } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { fireStore } from '../../firebase'
import Card from './Card'

export default function Home(props) {
    const { navigation } = props
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [isLoading, setLoading] = useState(true);



    useEffect(() => {
        fetchData()
        return () => {

        }
    }, []);

    const fetchData = () => {
        var newArray = [];
        fireStore.collection('products')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    let newProd = documentSnapshot.data()
                    newProd['id'] = documentSnapshot.id
                    newArray.push(newProd);
                });
                setData(newArray);
                setFilterData(newArray)
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false)
                console.log('Experiment completed');
            });
    }

    const search = (text) => {

    }
    return (
        <View style={{ height: "100%" }}>
            <Input variant="underlined" placeholder="Serach" />
            {isLoading ? (
                <View style={{ ...styles.activityContainer }}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            ) : (<FlatList
                data={filterData}
                renderItem={
                    ({ item }) => (
                        <Card data={item} navigation={navigation} />
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
