import {
    GET_LANGUAGES,
    SELECT_LANGUAGE
} from './constants';

const INITIAL_STATE = {
    all: [],
    selected: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LANGUAGES:
            return { ...state, all: action.payload };
        case SELECT_LANGUAGE:
            return { ...state, selected: action.payload };
        default: 
            return state;
    }
};
