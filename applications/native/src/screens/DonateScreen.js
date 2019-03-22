import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class DonateScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Donate',
    };
    
    render() {
        return (
            <View>
                <Text>Donate Page</Text>
            </View>
        );
    }
}

export default DonateScreen;
