import React, { Component } from 'react';
import { SectionList } from 'react-native';
import { connect } from 'react-redux';
import { 
    getLanguages, 
    getLanguagesForCountry, 
    selectLanguage } from './actions';
import { getVersions } from '../../actions';
import LanguageListItem from '../../components/LanguageListItem';
import SectionListHeader from '../../components/SectionListHeader';

class LanguageList extends Component {
    componentWillMount() {
        // If languages are not loaded yet, 
        // get a list of available languages
        if (this.props.languages.all.length <= 0) {
            this.props.getLanguages();
        }
    }
    
    onItemPress = (iso) => {
        // Save the selected language
        this.props.selectLanguage(iso);

        // Update the available versions per the selected lanugage
        this.props.getVersions(iso);

        // Run the callback function passed by the parent
        this.props.onItemPress();
    };

    createSections = () => {
        const sections = [];
        let currentSection = null;
        let currentLetter = '';

        // Sort languages alphabetically by name
        this.props.languages.all.sort((a, b) => { return a.name > b.name; });

        // Cycle through each language to create sections
        this.props.languages.all.forEach((lang) => {
            // If this language starts with a different letter,
            // the current section is over and a new one needs to
            // be created
            if (lang.name.charAt(0) !== currentLetter) {
                if (currentSection != null) {
                    // Add the current section to the sections list
                    sections.push(currentSection);
                }

                // Update the current letter for the section title
                currentLetter = lang.name.charAt(0);
                // Create the skeleton for the new section
                currentSection = { title: currentLetter.toUpperCase(), data: [] };
            }

            // Add the language to the current section
            currentSection.data.push(lang);
        });

        return sections;
    };

    listKeyExtractor = (item, index) => {
        // "item" represents an individual language
        // "index" represents the index (on the list) of the language
        return index + item.iso;
    };

    listRenderItem = ({ item }) => (
        // "item" represents an individual language
        <LanguageListItem
            iso={item.iso}
            onItemPress={this.onItemPress}
            selected={false}
            title={item.name}
        />
    );

    listRenderSectionHeader = ({ section: { title } }) => (
        // Customize the display of each section header
        <SectionListHeader
            title={title}
        />
    );

    displayLanguageList = () => {
        // If there are languages loaded,
        // display them in a section list
        if (this.props.languages.all.length > 0) {
            return (
                <SectionList
                    sections={this.createSections()}
                    keyExtractor={this.listKeyExtractor}
                    renderItem={this.listRenderItem}
                    renderSectionHeader={this.listRenderSectionHeader}
                    maxToRenderPerBatch={2000}
                    initialNumToRender={50}
                />
            );
        } 
        
        return null;
    }
    
    render() {
        return this.displayLanguageList();
    }
}

const mapStateToProps = (state) => {
    // Get the languages property from the application state
    const { languages } = state;

    // Get the selected country property from the application state
    const selectedCountry = state.countries.selected;

    return { languages, selectedCountry };
};

export default connect(mapStateToProps, { 
    getLanguages, getLanguagesForCountry, selectLanguage, getVersions })(LanguageList);
