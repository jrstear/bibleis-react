import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';

const BibleText = (props) => {
    const text = props.verses.map((verse) => {
        return (
            <Text style={styles.verseText} key={verse.verse_start}>
                <Text style={styles.verseNumber}>{verse.verse_start} </Text>
                {verse.verse_text}&nbsp;
            </Text>
        );
    });

    return (
        <ScrollView
            contentContainerStyle={styles.container}
        >
            <Text style={styles.verseText}>{text}</Text>
        </ScrollView>
    );
};

export default BibleText;
