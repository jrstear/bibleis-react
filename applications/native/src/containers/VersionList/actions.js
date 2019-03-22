import axios from 'axios';
import {
    getVersionsRoute
} from '../../utils/dbp';
import {
    GET_VERSIONS,
    SELECT_VERSION
} from './constants';

export const getVersions = (languageCode) => {
    return (dispatch) => {
        axios.get(`${getVersionsRoute(languageCode)}`)
            .then(results => {
                const versions = results.data;

                dispatch({
                    type: GET_VERSIONS,
                    payload: versions.data
                });
            });
    };
};

export const selectVersion = (version) => {
    return {
        type: SELECT_VERSION,
        payload: version
    };
};
