import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { myGlobalStyles } from '../styles/mystyles';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'GTA IV', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'GTA V', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'GTA III', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    return (
        <View style={myGlobalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={myGlobalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}