import { combineReducers } from 'redux';
import OnboardingReducer from '../screens/onboarding/reducer';
import CountryReducer from '../containers/CountryList/reducers';
import LanguageReducer from '../containers/LanguageList/reducer';
import VersionReducer from '../containers/VersionList/reducer';
import BibleReducer from '../screens/bible/reducer';
import BookReducer from '../containers/BookList/reducer';

export default combineReducers({
    onboarding: OnboardingReducer,
    countries: CountryReducer,
    languages: LanguageReducer,
    versions: VersionReducer,
    bible: BibleReducer,
    books: BookReducer
});
