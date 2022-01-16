import { Input } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator, Icon } from 'react-native'
import { fireStore } from '../../firebase'
import Card from './Card'
import { MaterialIcons } from "@expo/vector-icons"

export default function Home(props) {
    const { navigation } = props
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [search, setSearch] = useState("")



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

    const searchData = (e) => {
        if (e) {
            const newData = data.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase()
                const textData = e.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
        }
    }
    return (
        <View style={{ height: "100%" }}>
            <View style={{ padding: 5, backgroundColor: '#dfe4e8' }}>
                <Input
                    value={search}
                    onChangeText={(e) => searchData(e)}
                    placeholder="Type Here"
                />
            </View>
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
