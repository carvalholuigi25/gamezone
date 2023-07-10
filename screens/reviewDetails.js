import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { myGlobalStyles, images } from '../styles/mystyles';
import Card from '../shared/card';

class ReviewDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myparams = this.props.route.params;
        const rating = myparams.rating;
        var myobj = "";

        if(myparams && myparams.key > 0) {
            myobj = (
                <>
                    <Card>
                        <Text style={myGlobalStyles.titleText}>
                            { myparams.title } (id: { myparams.key })
                        </Text>
                        <Text>{ myparams.body }</Text>
                        <View style={styles.rating}>
                            <Text>GameZone rating: </Text>
                            <Image source={images.ratings[rating]} />
                        </View>
                    </Card>
                </>
            );
        } else {
            myobj = (
                <>
                    <Card>
                        <Text style={myGlobalStyles.titleText}>
                            Welcome to the my review details!
                        </Text>
                    </Card>
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

const styles = StyleSheet.create({
    rating: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    }
});