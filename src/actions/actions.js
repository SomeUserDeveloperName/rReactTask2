import { Types } from "../types/types"

const doAddNewNote = newNote => ({ type: Types.NOTE_ADD_NEW, payload: {newNote} })

const doEditNote = noteId  => ({ type: Types.NOTE_EDIT, payload: {noteId} })

const doCancelEditNote = editedNoteDefaultId => ({ type: Types.NOTE_EDIT_CANCEL, payload: {editedNoteDefaultId}})

const doSaveEditNote = (noteId, middleObj, editedNoteDefaultId)=> ({ type: Types.NOTE_EDIT_SAVE, payload: {noteId, middleObj, editedNoteDefaultId}})

const doNoteDropOrUpFromArchive = noteId => ({ type: Types.NOTE_ARCHIVE_TOGGLE, payload: {noteId}})

const doSwitchBetweenActiveArchiveNotes = () => ({ type: Types.NOTES_ARCHIVE_TOGGLE })

const doRemoveNote = noteId => ({ type: Types.NOTE_REMOVE, payload: {noteId}})

const doRemoveAllVisibleNotes = () => ({ type: Types.NOTES_ALL_VISIBLE_REMOVE })

export {doAddNewNote, doEditNote, doCancelEditNote, doSaveEditNote, doNoteDropOrUpFromArchive,
doSwitchBetweenActiveArchiveNotes, doRemoveNote, doRemoveAllVisibleNotes}

