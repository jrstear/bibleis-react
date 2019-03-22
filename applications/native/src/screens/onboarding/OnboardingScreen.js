import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOnboardingSettings } from '../../actions';
import Onboarding from '../../components/Onboarding';

class OnboardingScreen extends Component {
    static navigationOptions = {
        header: null
    };
    
    componentWillMount() {
        // Check to see if the onboarding
        // has been completed already
        this.props.getOnboardingSettings();
    }

    displayOnboarding() {
        // If onboarding should be skipped, 
        // navigate to the Bible page
        if (this.props.onboarding.shouldSkipOnboarding) {
            return null;
        }

        // If onboarding has not been completed,
        // display the onboarding page.
        return (
            <Onboarding
                onPress={() => this.props.navigation.navigate('DefaultLanguage')}
            />
        );
    }

    render() {
        return this.displayOnboarding();
    }
}

const mapStateToProps = (state) => {
    const { onboarding } = state;
    return { onboarding };
};

export default connect(mapStateToProps, { getOnboardingSettings })(OnboardingScreen);
