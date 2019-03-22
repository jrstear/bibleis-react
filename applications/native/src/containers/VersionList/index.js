import React, { Component } from 'react';
import { SectionList } from 'react-native';
import { connect } from 'react-redux';
import { getVersions, selectVersion } from './actions';
import VersionListItem from '../../components/VersionListItem';
import SectionListHeader from '../../components/SectionListHeader';

class VersionList extends Component {
    componentWillMount() {
        // If a selected language is available,
        // get a list of available versions
        if (this.props.selectedLanguage != null) {
            this.props.getVersions(this.props.selectedLanguage);
        }
    }

    onItemPress = (item) => {
        // Save the selected version
        this.props.selectVersion(item);

        // Run the callback function passed by the parent
        this.props.onItemPress(item.abbr);
    };

    createSections = () => {
        const sections = [];
        const audioAndText = {
            title: 'Audio & Text',
            data: []
        };
        const audioOnly = {
            title: 'Audio Only',
            data: []
        };
        const textOnly = {
            title: 'Text Only',
            data: []
        };

        // Cycle through each version to create sections
        this.props.versions.all.forEach((version) => {
            // Get a list of unique file types
            const types = version.filesets['dbp-prod'].reduce((accumulator, fileset) => {
                // Add the file type to the list
                return { ...accumulator, [fileset.type]: true };
            }, {});

            if ((types.audio_drama || types.audio) 
                && (types.text_format || types.text_plain)) {
                // This version has audio and text available
                audioAndText.data.push(version);
            } else if (types.audio_drama || types.audio) {
                // This version has only audio available
                audioOnly.data.push(version);
            } else if (types.text_format || types.text_plain) {
                // This version has only text available
                textOnly.data.push(version);
            }
        });        

        sections.push(audioAndText, audioOnly, textOnly);
        return sections;
    };

    listKeyExtractor = (item) => {
        // "item" represents an individual version
        return item.abbr;
    };

    listRenderItem = ({ item }) => (
        // "item" represents an individual version
        <VersionListItem
            id={item.id}
            onItemPress={() => this.onItemPress(item)}
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

    displayVersionList = () => {
        // If there are versions loaded,
        // display them in a section list
        if (this.props.versions.all.length > 0) {
            return (
                <SectionList
                    sections={this.createSections()}
                    keyExtractor={this.listKeyExtractor}
                    renderItem={this.listRenderItem}
                    renderSectionHeader={this.listRenderSectionHeader}
                />
            );
        }

        return null;
    }
    
    render() {
        return this.displayVersionList();
    }
}

const mapStateToProps = (state) => {
    const { versions } = state;
    const { selected } = state.languages;

    return { versions, selectedLanguage: selected };
};

export default connect(mapStateToProps, {
    getVersions, selectVersion })(VersionList);
