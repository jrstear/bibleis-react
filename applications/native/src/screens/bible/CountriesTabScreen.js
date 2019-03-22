import React, { Component } from 'react';
import CountryList from '../../containers/CountryList';

class CountriesTabScreen extends Component {
    onItemPress = () => {
        // When a country is selected, 
        // navigate to the languages page
        this.props.navigation.navigate('Languages');
    };

    render() {
        return (
            <CountryList
                onItemPress={this.onItemPress}
            />
        );
    }
}

export default CountriesTabScreen;
