import notesCategories from "../redux-states/notesCategories"

//Define Actions
const notesCategoriesReducer = (state = notesCategories, action) => {
    switch (action.type) {
            //Change character name
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }

        case 'CHANGE_OCCUPATION':
            return {
                ...state,
                occupation: action.payload
            }
        case 'CHANGE_AGE':
            return {
                ...state,
                age: action.payload
            }
        default:
            return state
    }
}

export default notesCategoriesReducer;