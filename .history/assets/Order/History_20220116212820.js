import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import { fireStore, auth } from '../../firebase'


const History = () => {
    const [data, setData] = useState("")
    useEffect(() => {
        fetchData()
        return () => {

        }
    }, []);

    const fetchData = () => {
        var newArray = [];
        fireStore.collection('Order')
            .where("email", "=", auth?.email)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    let newProd = documentSnapshot.data()
                    newProd['id'] = documentSnapshot.id
                    newArray.push(newProd);
                });
                setData(newArray);

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
            <Text></Text>
        </View>
    )
}

export default History

const styles = StyleSheet.create({})
