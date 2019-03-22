import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SettingsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Settings'
    };
    
    render() {
        return (
            <View>
                <Text>Settings Page</Text>
            </View>
        );
    }
}

export default SettingsScreen;
