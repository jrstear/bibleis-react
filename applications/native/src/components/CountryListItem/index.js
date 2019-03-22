import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

class CountryListItem extends PureComponent {
    onItemPress = () => {
        this.props.onItemPress(this.props.id);
    }
    
    render() {
        // If this item is selected, highlight it
        const textColor = this.props.selected ? styles.titleTextSelected : styles.titleText;

        return (
            <TouchableOpacity onPress={this.onItemPress}>
                <View style={styles.container}>
                    <Text style={textColor}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default CountryListItem;
