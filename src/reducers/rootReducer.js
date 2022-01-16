import notesCategoriesReducer from './notesParamsReducer';
import notesReducer from './notesReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    notesCategories: notesCategoriesReducer,
    notes: notesReducer,
})

export default rootReducer