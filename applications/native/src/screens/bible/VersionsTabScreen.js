import React, { Component } from 'react';
import VersionList from '../../containers/VersionList';

class VersionsTabScreen extends Component {
    onItemPress = () => {
        // When a version is selected, 
        // navigate to the Bible page
        this.props.navigation.navigate('Bible');
    };

    render() {
        return (
            <VersionList
                onItemPress={this.onItemPress}
            />
        );
    }
}

export default VersionsTabScreen;
