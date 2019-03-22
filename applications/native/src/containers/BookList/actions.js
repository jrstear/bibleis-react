import axios from 'axios';
import {
    getBookListRoute
} from '../../utils/dbp';
import {
    GET_BOOK_LIST,
    SELECT_BOOK,
    SELECT_CHAPTER
} from './constants';

export const getBookList = (versionId) => {
    return (dispatch) => {
        axios.get(`${getBookListRoute(versionId)}`)
        .then(results => {
            const books = results.data;
            dispatch({
                type: GET_BOOK_LIST,
                payload: books.data.books
            });
        });
    };
};

export const selectBook = (book) => {
    return {
        type: SELECT_BOOK,
        payload: book
    };
};

export const selectChapter = (book, chapter) => {
    return {
        type: SELECT_CHAPTER,
        payload: {
            book,
            chapter
        }
    };
};
