const doAddNewNote = newNote => ({ type: 'NOTE_ADD_NEW', payload: {newNote} })

const doEditNote = noteId  => ({ type: 'NOTE_EDIT', payload: {noteId} })

const doCancelEditNote = editedNoteDefaultId => ({ type: 'NOTE_EDIT_CANCEL', payload: {editedNoteDefaultId}})

const doSaveEditNote = (noteId, middleObj, editedNoteDefaultId)=> ({ type: 'NOTE_EDIT_SAVE', payload: {noteId, middleObj, editedNoteDefaultId}})

const doNoteDropOrUpFromArchive = noteId => ({ type: 'NOTE_ARCHIVE_TOGGLE', payload: {noteId}})

const doSwitchBetweenActiveArchiveNotes = () => ({ type: 'NOTES_ARCHIVE_TOGGLE' })

const doRemoveNote = noteId => ({ type: 'NOTE_REMOVE', payload: {noteId}})

const doRemoveAllVisibleNotes = () => ({ type: 'NOTES_ALL_VISIBLE_REMOVE' })

export {doAddNewNote, doEditNote, doCancelEditNote, doSaveEditNote, doNoteDropOrUpFromArchive,
doSwitchBetweenActiveArchiveNotes, doRemoveNote, doRemoveAllVisibleNotes}

