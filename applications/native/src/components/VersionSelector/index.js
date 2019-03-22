import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const VersionSelector = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View>
                <Text style={styles.labelText}>Bible</Text>
            </View>
        </TouchableOpacity>
    );
};

export default VersionSelector;
