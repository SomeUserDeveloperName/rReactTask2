import React, { useState } from 'react';
import NewNoteAddPopUp from './views/NewNoteAddPopUp';
import NewNoteButton from './views/NewNoteButton';
import Table from './views/Table';
import TableSummary from './views/TableSummary';

function App() {
   
    const [PopUpShowed, setPopUpFlag] = useState(false)
    const popUpProps = {showHideHandler: setPopUpFlag, PopUpShowed} 
   
    return (
            <main className="rootApp">

                {/* Please check /views/NewNotePopUp.js for detail*/}
                <NewNoteAddPopUp {...popUpProps}/>
                {/*<NotesTable/>*/}
                <Table/>
                {/*<div className="divider"></div>*/}
                <NewNoteButton {...popUpProps} />

                <TableSummary/>
                {/* Please check /views/NotesSummary.js for detail*/}
                {/*<NotesSummaryTable/>*/}
            </main>
    );
}

export default App;
