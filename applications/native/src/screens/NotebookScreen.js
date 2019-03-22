import React, { Component } from 'react';
import { View, Text } from 'react-native';

class NotebookScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Notebook'
    };
    
    render() {
        return (
            <View>
                <Text>Notebook Page</Text>
            </View>
        );
    }
}

export default NotebookScreen;
