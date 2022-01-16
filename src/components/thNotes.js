import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faTrash } from '@fortawesome/free-solid-svg-icons'

const ThNotesTable = ({notesArchiveActiveToggle, removeAllShowingNotes}) => {
    return (
        <ul className="tableHead">
            <li name="notesTHeadName">Name</li>
                <li name="notesTHeadCreated">Created</li>
                <li name="notesTHeadCategory">Category</li>
                <li name="notesTHeadContent">Content</li>
                <li name="notesTHeadDates">Dates</li>
        <li name="notesTHeadControls">
            <ul name="headerNoteControls">
                <li name="archiveToggle" onClick={() => notesArchiveActiveToggle}>
                    <i data-tooltip="Show archived notes" aria-hidden="true">
                        <FontAwesomeIcon icon={faArchive} size="lg" />
                    </i>
                </li>
                <li name="removeAllNotes" onClick={() => removeAllShowingNotes}>
                    <i data-tooltip="Remove all active" aria-hidden="true">
                        <FontAwesomeIcon icon={faTrash} size="lg" />
                    </i>
                </li>
            </ul>
        </li>
    </ul>)
};

export default ThNotesTable