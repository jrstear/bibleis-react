import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeOnboarding } from './actions';
import VersionList from '../../containers/VersionList';

class VersionsScreen extends Component {
    onItemPress = (versionAbbr) => {
        // When a version is selected, 
        // navigate to the main page
        this.props.navigation.navigate('MainApp');

        // Save the selected language and version,
        // and complete onboarding
        this.props.completeOnboarding(this.props.selectedLanguage, 
            versionAbbr);
    };
    
    render() {
        return (
            <VersionList
                onItemPress={this.onItemPress}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const selectedLanguage = state.languages.selected;

    return { selectedLanguage };
};

export default connect(mapStateToProps, { completeOnboarding })(VersionsScreen);
