import React from 'react';
import { View, Text } from 'react-native';
import { myGlobalStyles } from '../styles/mystyles';

export default function About() {
    return (
        <View style={myGlobalStyles.container}>
            <Text>About Screen</Text>
        </View>
    )
}