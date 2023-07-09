import React from 'react';
import { View, Text, Button } from 'react-native';
import { myGlobalStyles } from '../styles/mystyles';

class ReviewDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myparams = this.props.route.params;
        
        return (
            <View style={myGlobalStyles.container}>
                <Text>{ myparams.title }</Text>
                <Text>{ myparams.body }</Text>
                <Text>{ myparams.rating }</Text>
            </View>
        );
    }
}

export default ReviewDetails;