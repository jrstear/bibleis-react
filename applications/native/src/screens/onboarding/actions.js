import {
    GET_ONBOARDING_SETTINGS, COMPLETE_ONBOARDING
} from './constants';
import {
    SETTINGS_ONBOARDING_COMPLETED,
    SETTINGS_DEFAULT_LANGUAGE,
    SETTINGS_DEFAULT_VERSION
} from '../../utils/constants';
import {
    loadSetting,
    saveSetting
} from '../../utils/helpers';

export const getOnboardingSettings = () => {
    return (dispatch) => {
        loadSetting(SETTINGS_ONBOARDING_COMPLETED, false, 
            dispatch, GET_ONBOARDING_SETTINGS);
    };
};

export const completeOnboarding = (language, version) => {
    saveSetting(SETTINGS_DEFAULT_LANGUAGE, language);
    saveSetting(SETTINGS_DEFAULT_VERSION, version);
    
    return {
        type: COMPLETE_ONBOARDING,
        payload: true
    };
};
