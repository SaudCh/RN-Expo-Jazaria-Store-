import React from 'react'
import { View, Text } from 'react-native'
import { auth } from '../../firebase'
import Card from './Card'

export default function Home() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Card />
        </View>
    )
}
