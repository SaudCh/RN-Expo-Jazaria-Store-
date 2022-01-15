import React from 'react'
import { View, Text } from 'react-native'
import { auth } from '../../firebase'

export default function Home() {
    return (
        <View>
            <Text>{auth.currentUser?.email}</Text>
        </View>
    )
}
