import axios from 'axios';
import {
    getCountriesRoute
} from '../../utils/dbp';
import {
    GET_COUNTRIES,
    SELECT_COUNTRY
} from './constants';

export const getCountries = () => {
    return (dispatch) => {
        axios.get(`${getCountriesRoute()}`)
            .then(results => {
                const countries = results.data;
                dispatch({
                    type: GET_COUNTRIES,
                    payload: countries.data
                });
            });
    };
};

export const selectCountry = (country) => {
    return {
        type: SELECT_COUNTRY,
        payload: country
    };
};
