import React, { Component } from 'react';
import BookList from '../../containers/BookList';

class PassageSelectScreen extends Component {
    onItemPress = () => {
        // Navigate back to the Bible page
        this.props.navigation.navigate('Bible');
    };

    render() {
        return (
            <BookList
                onItemPress={this.onItemPress}
            />
        );
    }
}

export default PassageSelectScreen;
