import React from 'react';
import { View, Text, Button } from 'react-native';
import { myGlobalStyles } from '../styles/mystyles';

class ReviewDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    backHandler() {
        this.props.navigation.navigate("ReviewDetails", { key: '0' });
    }

    render() {
        const myparams = this.props.route.params;
        var myobj = "";

        if(myparams && myparams.key > 0) {
            myobj = (
                <>
                    <Text>{ myparams.key }</Text>
                    <Text>{ myparams.title }</Text>
                    <Text>{ myparams.body }</Text>
                    <Text>{ myparams.rating }</Text>
                    <Button title='back' onPress={() => this.backHandler()} />
                </>
            );
        } else {
            myobj = (
                <>
                    <Text>Welcome to the my review details!</Text>
                </>
            );
        }

        return (
            <View style={myGlobalStyles.container}>
                {myobj}
            </View>
        );
    }
}

export default ReviewDetails;