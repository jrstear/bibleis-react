import {
    GET_BOOK_LIST,
    SELECT_BOOK,
    SELECT_CHAPTER
} from './constants';

const INITIAL_STATE = {
    all: [],
    selectedBook: null,
    selectedChapter: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BOOK_LIST: 
            return { 
                ...state, 
                all: action.payload, 
                // Default to the first available book and chapter
                selectedBook: action.payload[0],
                selectedChapter: action.payload[0].chapters[0]
            };
        case SELECT_BOOK:
            return { ...state, selectedBook: action.payload };
        case SELECT_CHAPTER:
            return { 
                ...state, 
                selectedBook: action.payload.book,
                selectedChapter: action.payload.chapter
            };
        default:
            return state;
    }
};
