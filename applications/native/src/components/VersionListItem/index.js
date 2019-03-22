import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

class VersionListItem extends PureComponent {
    render() {
        // If this item is selected, highlight it
        const textColor = this.props.selected ? styles.titleTextSelected : styles.titleText;

        return (
            <TouchableOpacity onPress={this.props.onItemPress}>
                <View style={styles.container}>
                    <Text style={textColor}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default VersionListItem;
