import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NoRecords from '../components/noRecords';
import ThNotesTable from '../components/thNotes';
import TrEditNotesTable from '../components/trEditNote';
import TrNotesTable from '../components/trNotes';
import { getCurrentDate } from '../helpers/dateHelper';

//Main Table item component
const Table = (props) => {
    //Get notesList from notedReducer
    const showArchiveFlag = useSelector(state => state.notes.showArchivedNotes)//bool
   
    const editNoteId = useSelector(state => state.notes.editNoteId)//
    const notesAll = useSelector(state => state.notes.notes)
    
    const notesToShowing = notesAll.filter(note => note.archived === showArchiveFlag)
  
    //Use for all the dispatch actions
    const dispatch = useDispatch();

    //show archived or active notes
    const notesArchiveActiveToggle = () => {
        dispatch({type: 'NOTES_ARCHIVE_TOGGLE', payload: ''})
    }

    //Remove all visible notes from state
    const removeAllShowingNotes = () => {
        dispatch({type: 'NOTES_ALL_VISIBLE_REMOVE', payload: ''})
    }

    //sending note to or from archive by id
    const archiveActiveNoteToggle = (noteId) => {
        dispatch({type: 'NOTE_ARCHIVE_TOGGLE', payload: {noteId}})
    }
    
    //remove note from state by id
    const removeNote = (noteId) => {
        dispatch({type: 'NOTE_REMOVE', payload: {noteId}})
    }

    //Edit selected note by id
    const editNote = (noteId) => {
        dispatch({type: 'NOTE_EDIT', payload: {noteId}})
    }
       
      
    //cancel editing of note and rollback to pre-edited state
    const cancelEdit = () => {
        dispatch({type: 'NOTE_EDIT_CANCEL', payload: 'none'})
    }

    //save edited note to state
    const saveEdited = ({id, name, category, content}) => {
        const dateEdited = getCurrentDate()
        const middleObj = {name, category, content, dateEdited}
        const editNoteId = 'none'
        dispatch({type: 'NOTE_EDIT_SAVE', payload: {id, middleObj, editNoteId}})
    }
    

    const thEvents = {notesArchiveActiveToggle, removeAllShowingNotes}
    const noteEvents = {editNote, archiveActiveNoteToggle, removeNote}
    const noteEditEvents = {cancelEdit, saveEdited}

    return (

        <section className="notesTable">
            <ThNotesTable events={thEvents} showArchiveFlag={showArchiveFlag}/>
                <div className="tableBody">
                 {notesToShowing.length > 0 ? notesToShowing.map(note => {
                     return (note.id !== editNoteId ? <TrNotesTable key={note.name+note.id} note={note} events={noteEvents} showArchiveFlag={showArchiveFlag}/>
                                                    : <TrEditNotesTable key={note.name+note.id} note={note} events={noteEditEvents}/>)
                    })
                                            : <NoRecords/>
                 }
                </div>
        </section>   
    );
}

export default Table;