import { Localization } from 'expo-localization';
import {
    GET_ONBOARDING_SETTINGS,
    COMPLETE_ONBOARDING
} from './constants';

const INITIAL_STATE = { 
    shouldSkipOnboarding: false,
    deviceCountry: '',
    deviceLanguage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ONBOARDING_SETTINGS:
            return { 
                ...state, 
                shouldSkipOnboarding: action.payload,
                deviceCountry: Localization.country,
                deviceLanguage: Localization.locale };
        case COMPLETE_ONBOARDING:
            return { ...state, shouldSkipOnboarding: action.payload };
        default:
            return state;
    }
};
