import notesCategoriesReducer from './notesCategoriesReducer';
import notesReducer from './notesReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = (localStorageObj) => combineReducers({
    notesCategories: notesCategoriesReducer(localStorageObj),
    notes: notesReducer(localStorageObj),
})

export default rootReducer