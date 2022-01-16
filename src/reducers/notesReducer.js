import mockedNotes from '../redux-states/mockedNotes'

const notesReducer = (state = mockedNotes , action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todoList: action.payload
            }
        default:
            return state
    }
}

export default notesReducer;