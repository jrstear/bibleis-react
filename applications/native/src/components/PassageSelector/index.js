import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const PassageSelector = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View>
                <Text style={styles.labelText}>{props.book} {props.chapter}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default PassageSelector;
