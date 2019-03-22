import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getCountries, selectCountry } from './actions';
import { getLanguagesForCountry } from '../../actions';
import CountryListItem from '../../components/CountryListItem';

class CountryList extends Component {
    componentWillMount() {
        // If countries are not loaded yet, 
        // get a list of available countries
        if (this.props.countries.all.length <= 0) {
            this.props.getCountries();
        }
    }
    
    onItemPress = (countryId) => {
        // Save the selected country
        this.props.selectCountry(countryId);

        // Update the available languages per the selected country
        this.props.getLanguagesForCountry(countryId);

        // Run the callback function passed by the parent
        this.props.onItemPress();
    };

    getSelectedItemIndex = () => {
        // If an item has already been previously selected,
        // return the index of the item. Otherwise,
        // return 0.
        let itemIndex = 0;

        if (this.props.countries.selected !== null) {
            itemIndex = this.props.countries.all.findIndex(country => {
                return country.codes.iso_a2 === this.props.countries.selected;
            });
        } else if (this.props.deviceCountry !== '') {
            itemIndex = this.props.countries.all.findIndex(country => (
                country.codes.iso_a2 === this.props.deviceCountry
            ));
        }

        return itemIndex;
    };

    listKeyExtractor = (item) => {
        // "item" represents an individual country
        return item.codes.iso_a2;
    };

    listRenderItem = ({ item }) => (
        // "item" represents an individual language
        <CountryListItem
            id={item.codes.iso_a2}
            onItemPress={this.onItemPress}
            selected={this.props.countries.selected === item.codes.iso_a2}
            title={item.name}
        />
    );

    displayCountryList = () => {
        // If there are countries loaded,
        // display them in a list
        if (this.props.countries.all.length > 0) {
            return (
                <FlatList
                    data={this.props.countries.all}
                    extraData={this.props.countries.selected}
                    keyExtractor={this.listKeyExtractor}
                    renderItem={this.listRenderItem}
                />
            );
        } 
        
        return null;
    }
    
    render() {
        return this.displayCountryList();
    }
}

const mapStateToProps = (state) => {
    // Get the countries property from the application state
    const { countries } = state;

    // Get the device's locale properties
    const { deviceCountry } = state.onboarding;

    return { countries, deviceCountry };
};

export default connect(mapStateToProps, { 
    getCountries, selectCountry, getLanguagesForCountry })(CountryList);
