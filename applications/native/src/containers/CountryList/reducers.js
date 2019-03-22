import {
    GET_COUNTRIES,
    SELECT_COUNTRY
} from './constants';

const INITIAL_STATE = {
    all: [],
    selected: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, all: action.payload };
        case SELECT_COUNTRY:
            return { ...state, selected: action.payload };
        default: 
            return state;
    }
};
