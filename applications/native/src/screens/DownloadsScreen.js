import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DownloadsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Downloads'
    };
    
    render() {
        return (
            <View>
                <Text>Downloads Text</Text>
            </View>
        );
    }
}

export default DownloadsScreen;
