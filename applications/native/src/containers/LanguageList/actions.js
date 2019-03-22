import axios from 'axios';
import {
    getLanguagesRoute,
    getLanguagesForCountryRoute
} from '../../utils/dbp';
import {
    GET_LANGUAGES,
    SELECT_LANGUAGE
} from './constants';

export const getLanguages = () => {
    return (dispatch) => {
        axios.get(`${getLanguagesRoute()}`)
            .then(results => {
                const languages = results.data;
                dispatch({
                    type: GET_LANGUAGES,
                    payload: languages.data
                });
            });
    };
};

export const getLanguagesForCountry = (countryId) => {
    return (dispatch) => {
        axios.get(`${getLanguagesForCountryRoute(countryId)}`)
            .then(results => {
                const country = results.data;
                dispatch({
                    type: GET_LANGUAGES,
                    payload: country.data.languages
                });
            });
    };
};

export const selectLanguage = (language) => {
    return {
        type: SELECT_LANGUAGE,
        payload: language
    };
};
