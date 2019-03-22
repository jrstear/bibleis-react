import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShareButton = (props) => {
    return (
        <View>
            <Icon 
                name="share-alt" 
                size={18}
                onPress={props.onPress}
            />
        </View>
    );
};

export default ShareButton;
