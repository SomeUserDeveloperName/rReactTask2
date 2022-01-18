import notesCategories from "../redux-states/notesCategories"

//Define Actions
const notesCategoriesReducer = (state = notesCategories, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default notesCategoriesReducer;