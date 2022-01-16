import React from 'react';
import NewNoteButton from './views/NewNoteButton';
//import NotesTable from './views/NotesTable';
import Table from './views/Table';
import TableSummary from './views/TableSummary';
//import NotesSummaryTable from './views/NotesSummaryTable';

function App() {

    return (
            <main className="rootApp">

                {/* Please check /views/NewNotePopUp.js for detail*/}
                {/* Please check /views/NotesTable.js for detail*/}
                {/*<NotesTable/>*/}
                
                <Table/>
                {/*<div className="divider"></div>*/}
                <NewNoteButton />

                <TableSummary/>
                {/* Please check /views/NotesSummary.js for detail*/}
                {/*<NotesSummaryTable/>*/}
            </main>
    );
}

export default App;
