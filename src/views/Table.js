import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NoRecords from '../components/noRecords';
import ThNotesTable from '../components/thNotes';
import TrEditNotesTable from '../components/trEditNote';
import TrNotesTable from '../components/trNotes';

//Main Table item component
const Table = (props) => {
    //Get notesList from notedReducer
    const notesArchivedFlag = useSelector(state => state.notes.showArchivedNotes)//bool

    const editNoteId = useSelector(state => state.notes.editNoteId)//
    const notesAll = useSelector(state => state.notes.notes)
    
    const notesToShowing = notesAll.filter(note => note.archived === notesArchivedFlag)

    //Use for all the dispatch actions
    const dispatch = useDispatch();

    //show archived or active notes
    const notesArchiveActiveToggle = () => {
        dispatch({type: 'NOTES_VISIBLE_VISABILITY', payload: !notesArchivedFlag})
    }

    //Remove all visible notes from state
    const removeAllShowingNotes = () => {
        //filter to get the todoId which need to be remove
        const newNotes = notesAll.filter(note => note.archived !== notesArchivedFlag);
        dispatch({type: 'NOTES_VISIBLE_REMOVE', payload: newNotes})
    }

    //Edit selected note by id
    const editNote = (noteId) => {
        // const newNotes = notesAll.filter(note => note.id != noteId)
        // dispatch({type: 'NOTES_NOTe_REMOVE', payload: newNotes})
    }

    //sending note to or from archive by id
    const archiveActiveNoteToggle = (noteId) => {
        dispatch({type: 'NOTES_NOTE_ARCHIVE_TOGGLE', payload: {notesAll, noteId}})
    }
    
    //remove note from state by id
    const removeNote = (noteId) => {
        const newNotes = notesAll.filter(note => note.id !== noteId)
        dispatch({type: 'NOTES_NOTE_REMOVE', payload: newNotes})
    }
      
    //cancel editing of note and rollback to pre-edited state
    const cancelEdit = () => {
        dispatch({type: 'NOTE_CANCEL_EDIT', payload: '-1'})
    }
    
    //save edited note to state
    const saveEdited = (noteId) => {
        const editedNote = ''
        dispatch({type: 'NOTE_SAVE_EDIT', payload: editedNote})
    }
    

    const thEvents = {notesArchiveActiveToggle, removeAllShowingNotes}
    const noteEvents = {editNote, archiveActiveNoteToggle, removeNote}
    const noteEditEvents = {cancelEdit, saveEdited}

    return (

        <section className="notesTable">
            <ThNotesTable {...thEvents}/>
                <div className="tableBody">
                 {notesToShowing.length > 0 ? notesToShowing.map(note => {
                     return (note.id !== editNoteId ? <TrNotesTable key={note.id.toString()} note={note} events={noteEvents} />
                                                    : <TrEditNotesTable key={note.id.toString()} note={note} events={noteEditEvents}/>)
                    })
                                            : <NoRecords/>
                 }
                </div>
        </section>   
    );
}

export default Table;