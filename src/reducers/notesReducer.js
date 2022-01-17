import mockedNotes from '../redux-states/mockedNotes'

const notesReducer = (state = mockedNotes , action) => {
    switch (action.type) {

        case 'NOTE_ARCHIVE_TOGGLE':
            return {
                ...state,
                notes: state.notes.map(note => ({...note, ...{archived: note.id === action.payload.noteId ? !note.archived : note.archived}}))
            }     
        case 'NOTE_REMOVE':
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.noteId)
            }

        case 'NOTES_ARCHIVE_TOGGLE':
            return {
                ...state,
                showArchivedNotes: !state.showArchivedNotes
            }      
        case 'NOTES_ALL_VISIBLE_REMOVE':
            return {
                ...state,
                notes: state.notes.filter(note => note.archived !== state.showArchivedNotes)
            }   
 
        default:
            return state
    }
}

export default notesReducer;