import mockedNotes from '../redux-states/mockedNotes'
import { Types } from '../types/types'

const notesReducer = (localStorage) => {
      
    return (state = (localStorage.notes ? localStorage.notes : mockedNotes) , action) => {
    switch (action.type) {
        case Types.NOTE_ADD_NEW:
            return {
                ...state,
                notes: [...state.notes, action.payload.newNote] 
            } 

        case Types.NOTE_EDIT:
            return {
                ...state,
                editNoteId: action.payload.noteId 
            } 
        case Types.NOTE_EDIT_CANCEL:
            return {
                ...state,
                editNoteId: action.payload.editedNoteDefaultId
            } 
        case Types.NOTE_EDIT_SAVE:
            return {
                ...state,
                notes: state.notes.map(note => {
                 return   note.id !== action.payload.noteId 
                                  ? note 
                                  : {...note, ...action.payload.middleObj}
                }),

                editNoteId: action.payload.editedNoteDefaultId
            }    

        case Types.NOTE_ARCHIVE_TOGGLE:
            return {
                ...state,
                notes: state.notes.map(note => ({...note, archived: note.id === action.payload.noteId ? !note.archived : note.archived}))
            }     
        case Types.NOTE_REMOVE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.noteId)
            }

        case Types.NOTES_ARCHIVE_TOGGLE:
            return {
                ...state,
                showArchivedNotes: !state.showArchivedNotes
            }      
        case Types.NOTES_ALL_VISIBLE_REMOVE:
            return {
                ...state,
                notes: state.notes.filter(note => note.archived !== state.showArchivedNotes)
            }   
 
        default:
            return state
        }
    }
}

export default notesReducer;