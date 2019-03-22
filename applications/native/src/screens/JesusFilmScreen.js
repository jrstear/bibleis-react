import React, { Component } from 'react';
import { View, Text } from 'react-native';

class JesusFilmScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'JesusFilm'
    };
    
    render() {
        return (
            <View>
                <Text>JesusFilm Page</Text>
            </View>
        );
    }
}

export default JesusFilmScreen;
