import React, { Component } from 'react';
import LanguageList from '../../containers/LanguageList';

class LanguagesTabScreen extends Component {
    onItemPress = () => {
        // When a language is selected, 
        // navigate to the versions page
        this.props.navigation.navigate('Versions');
    };

    render() {
        return (
            <LanguageList
                onItemPress={this.onItemPress}
            />
        );
    }
}

export default LanguagesTabScreen;
