import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTasks, faRandom, faLightbulb, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { convertDate } from '../helpers/dateHelper';
import categoryToIcon from '../helpers/categoriesToIconsHelper';

const TrNotesTable = ({events, note}) => {
    const iconsObj = {faTasks, faRandom, faLightbulb, faQuoteRight}
    const {editNote, archiveActiveNoteToggle, removeNote} = events

    const createdDate = convertDate(note.dateCreated)
    const noteDates = note.dateEdited ? `${note.dateCreated}, ${note.dateEdited}`
                                      : note.dateCreated
    return (
            <ul className="noteRow"> 
                <li name="noteIcon">
                    <FontAwesomeIcon icon={categoryToIcon(note.category, iconsObj)} size="2x" />
                </li>
                <li name="noteName">{note.name}</li>
                <li name="noteCreated">{createdDate}</li>
                <li name="noteCategory">{note.category}</li>
                <li name="noteContent">{note.content}</li>
                <li name="noteDates">{noteDates}</li>
                <li name="noteControls">
                <ul className="controlButtonsWrap" >
                    <li name="editNoteControl" onClick={() => editNote(note.id)}><i data-tooltip="Edit note" aria-hidden="true"><FontAwesomeIcon icon={faPencilAlt} size="lg" /></i></li>
                    <li name="archiveNoteControl" onClick={() => archiveActiveNoteToggle(note.id)}><i data-tooltip="To Archive" aria-hidden="true"><FontAwesomeIcon icon={faArchive} size="lg" /></i></li>
                    <li name="removeNoteControl" onClick={() => removeNote(note.id)}><i data-tooltip="Remove note" aria-hidden="true"><FontAwesomeIcon icon={faTrash} size="lg" /></i></li>
                </ul>
                </li>  
            </ul>)
}                        
export default TrNotesTable