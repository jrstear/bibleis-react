import {
    GET_CHAPTER_TEXT
} from './constants';

const INITIAL_STATE = {
    book: 'Genesis',
    chapterId: 1,
    verses: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CHAPTER_TEXT: {
            const book = action.payload[0].book_name;
            const chapter = action.payload[0].chapter;
            
            return { ...state, book, chapterId: chapter, verses: action.payload };
        }
        default:
            return state;
    }
};
