import mockedNotes from '../redux-states/mockedNotes'

const notesReducer = (state = mockedNotes , action) => {
    switch (action.type) {
        case 'NOTE_ADD_NEW':
            return {
                ...state,
                notes: [...state.notes, action.payload.note] 
            } 

        case 'NOTE_EDIT':
            return {
                ...state,
                editNoteId: action.payload.noteId 
            } 
        case 'NOTE_EDIT_CANCEL':
            return {
                ...state,
                editNoteId: action.payload
            } 
        case 'NOTE_EDIT_SAVE':
            return {
                ...state,
                notes: state.notes.map(note => {
                 return   note.id !== action.payload.id 
                                  ? note 
                                  : {...note, ...action.payload.middleObj}
                }),

                editNoteId: action.payload.editNoteId
            }    

        case 'NOTE_ARCHIVE_TOGGLE':
            return {
                ...state,
                notes: state.notes.map(note => ({...note, archived: note.id === action.payload.noteId ? !note.archived : note.archived}))
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