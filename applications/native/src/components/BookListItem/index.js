import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

class BookListItem extends PureComponent {
    onItemPress = (selectedChapter) => {
        this.props.onItemPress(this.props.book, selectedChapter);
    }

    displayChapters = () => {
        // If this item is selected, display a list
        // of available chapters
        if (this.props.selected) {
            const chapters = this.props.book.chapters.map(chapter => (
                <View style={styles.chapterText} key={chapter} >
                    <Text 
                        key={chapter} 
                        onPress={() => this.onItemPress(chapter)}
                    >{chapter}</Text>
                </View>
            ));

            return (
                <View style={styles.chapterContainer}>
                    {chapters}
                </View>
            );
        }

        return null;
    }
    
    render() {
        // If this item is selected, highlight it
        const textColor = this.props.selected ? styles.titleTextSelected : styles.titleText;

        return (
            <View>
                <TouchableOpacity onPress={this.props.onBookPress}>
                    <View style={styles.container}>
                        <Text style={textColor}>{this.props.book.name}</Text>
                    </View>
                </TouchableOpacity>
                {this.displayChapters()}
            </View>
        );
    }
}

export default BookListItem;
