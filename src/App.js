import React, { useState } from 'react';
import NewNoteAddPopUp from './views/NewNoteAddPopUp/NewNoteAddPopUp';
import NewNoteButton from './views/NewNoteAddButton/NewNoteAddButton';
import NotesTable from './views/NotesTable/NotesTable';
import NotesTableSummary from './views/NotesTableSummary/NotesTableSummary';

function App() {
   
    const [PopUpShowed, setPopUpFlag] = useState(false)
    const popUpProps = {showHideHandler: setPopUpFlag, PopUpShowed} 
   
    return (
            <main className="rootApp">

                {/* Please check /views/NewNotePopUp.js for detail*/}
                <NewNoteAddPopUp {...popUpProps}/>

                 {/* Please check /views/Table.js for detail*/}
                <NotesTable/>
                
                 {/* Please check /views/NewNoteButton.js for detail*/}
                <NewNoteButton {...popUpProps} />

                {/* Please check /views/NotesSummary.js for detail*/}
                <NotesTableSummary/>
  
            </main>
    );
}

export default App;
