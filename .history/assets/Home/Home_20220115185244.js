import React from 'react'
import { View, Text } from 'react-native'
import { auth } from '../../firebase'

export default function Home() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>{auth.currentUser?.email}</Text>
        </View>
    )
}
