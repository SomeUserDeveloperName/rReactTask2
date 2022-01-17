import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faSave } from '@fortawesome/free-solid-svg-icons'
import { faTasks, faRandom, faLightbulb, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import categoryToIcon from '../helpers/categoriesToIconsHelper';
import CategoriesSelector from './categoriesSelector';

const TrEditNotesTable = ({events, note}) => {
    
    const [localNote, saveToLocalNote] = useState(note);
    const iconsObj = {faTasks, faRandom, faLightbulb, faQuoteRight}
    const {saveEdited, cancelEdit} = events

    // const handleSubmit = (event) => {
    //     // alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    const handleChange = (event, field) => {  
          console.log(event, field)
        //saveToLocalNote({}, {...localNote}, {field: event.target.value});  
    }

    return (
            <ul className="noteRow"> 
                <li name="noteIcon">
                    <FontAwesomeIcon icon={categoryToIcon(note.category, iconsObj)} size="2x" />
                </li>
                <li name="noteName"><input type="text" name="noteName" max-length="50" value={localNote.name} onChange={(e, field = `name`) => handleChange}/></li>
                <li name="noteCategory"><CategoriesSelector defaultValue={note.category}/></li>
                <li name="noteContent"><input type="text" name="noteContent" max-length="50" value={localNote.content} onChange={(e, field = `content`) => handleChange}/></li>
                <li name="noteControls">
                <ul className="controlButtonsWrap" >
                    <li name="archiveNoteControl" onClick={() => cancelEdit(note.id)}><i data-tooltip="Cancel Editing" aria-hidden="true"><FontAwesomeIcon icon={faUndo} size="lg" /></i></li>
                    <li name="removeNoteControl" onClick={() => saveEdited(saveToLocalNote)}><i data-tooltip="Save Note" aria-hidden="true"><FontAwesomeIcon icon={faSave} size="lg" /></i></li>
                </ul>
                </li>  
            </ul>)
}                        
export default TrEditNotesTable