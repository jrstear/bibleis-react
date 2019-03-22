import {
    GET_VERSIONS,
    SELECT_VERSION
} from './constants';

const INITIAL_STATE = {
    all: [],
    selected: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_VERSIONS:
            return { ...state, all: action.payload };
        case SELECT_VERSION:
            return { ...state, selected: action.payload };
        default:
            return state;
    }
};
