import axios from 'axios';
import {
    getChapterTextRoute
} from '../../utils/dbp';
import {
    GET_CHAPTER_TEXT
} from './constants';

export const getChapterText = (versionId, bookId, chapterId) => {
    return (dispatch) => {
        axios.get(`${getChapterTextRoute(versionId, bookId, chapterId)}`)
            .then(results => {
                const text = results.data;
                
                dispatch({
                    type: GET_CHAPTER_TEXT,
                    payload: text.data
                });
            })
            .catch(error => {
                // TODO
            });
    };
};
