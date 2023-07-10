import React from 'react';
import { View, Text } from 'react-native';
import { myGlobalStyles } from '../styles/mystyles';
import Card from '../shared/card';

export default function About() {
    return (
        <View style={myGlobalStyles.container}>
            <Card>
                <Text style={myGlobalStyles.titleText}>
                    About Screen
                </Text>
                <Text style={myGlobalStyles.descText}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis quaerat repellendus, nihil, consequuntur fugiat quos iste architecto dolores laudantium exercitationem maiores ratione reiciendis laborum dolorum odit odio, id nisi.
                </Text>
            </Card>
        </View>
    )
}