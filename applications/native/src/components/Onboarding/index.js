import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { COLOR_BRAND_BLUE } from '../../utils/constants';

const Onboarding = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Bible.is</Text>
            <Button 
                title='Select a Language'
                onPress={props.onPress} 
                color={COLOR_BRAND_BLUE}
            />
        </View>
    );
};

export default Onboarding;
