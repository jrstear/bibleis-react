import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const SectionListHeader = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{props.title}</Text>
        </View>
    );
};

export default SectionListHeader;
