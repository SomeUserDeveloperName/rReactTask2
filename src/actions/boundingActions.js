
const boundingActions = (bindActionCreators, dispatch, actions) => {

  return bindActionCreators({
      'addNew': actions.doAddNewNote,
      'edit': actions.doEditNote,
      'cancelEdit': actions.doCancelEditNote,
      'saveEdited': actions.doSaveEditNote,
      'toFromArchive': actions.doNoteDropOrUpFromArchive,
      'archiveActiveToggle': actions.doSwitchBetweenActiveArchiveNotes,
      'removeNote': actions.doRemoveNote,
      'removeAllVisible': actions.doRemoveAllVisibleNotes
    },
     dispatch
  )  
}
export default boundingActions  