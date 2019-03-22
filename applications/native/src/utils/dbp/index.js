// DBP
const DBP_API_URL = 'https://api.dbp4.org/';
const DBP_API_KEY = 'cd27a52e-4b33-4ebb-bba7-e1d0289ab45c';
const DBP_API_VERSION = '4';
const DBP_API_FORMAT = 'json';

// API Routes
// Returns a list of books for the designated Bible version
export const getBookListRoute = (bibleVersionId) => {
    return `${DBP_API_URL}bibles/${bibleVersionId}?v=${DBP_API_VERSION}
        &key=${DBP_API_KEY}&format=${DBP_API_FORMAT}`;
};

// Returns a list of countries
export const getCountriesRoute = () => {
    return `${DBP_API_URL}countries/?has_filesets=true&include_languages=true&v=
        ${DBP_API_VERSION}&key=${DBP_API_KEY}&format=${DBP_API_FORMAT}`;
};

// Returns a list of languages
export const getLanguagesRoute = () => {
    return `${DBP_API_URL}languages/?v=${DBP_API_VERSION}&key=
        ${DBP_API_KEY}&format=${DBP_API_FORMAT}`;
};

// Returns a list of languages for the designated country
export const getLanguagesForCountryRoute = (countryId) => {
    return `${DBP_API_URL}countries/${countryId}?v=
        ${DBP_API_VERSION}&key=${DBP_API_KEY}&format=${DBP_API_FORMAT}`;
};

// Returns a list of Bible versions for the designated language
export const getVersionsRoute = (languageCode) => {
    return `${DBP_API_URL}bibles?language_code=${languageCode.toUpperCase()}&v=
        ${DBP_API_VERSION}&key=${DBP_API_KEY}&format=${DBP_API_FORMAT}`;
};

// Returns a list of verses for the designated Bible version, book, and chapter
export const getChapterTextRoute = (bibleVersionId, bookId, chapterId) => {
    return `${DBP_API_URL}bibles/filesets/${bibleVersionId}/${bookId}/
        ${chapterId}?v=${DBP_API_VERSION}&key=${DBP_API_KEY}&format=
        ${DBP_API_FORMAT}`;
};
