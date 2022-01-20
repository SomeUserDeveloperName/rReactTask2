import React, { useEffect, useState } from 'react';
import NewNoteAddPopUp from './views/NewNoteAddPopUp/NewNoteAddPopUp';
import NewNoteButton from './views/NewNoteAddButton/NewNoteAddButton';
import NotesTable from './views/NotesTable/NotesTable';
import NotesTableSummary from './views/NotesTableSummary/NotesTableSummary';
import { useSelector } from 'react-redux';
import { localStorageReadRaw, localStorageWrite } from './helpers/localStorageHelper';

function App({storageID}) {
   
    const [PopUpShowed, setPopUpFlag] = useState(false)
    const popUpProps = {showHideHandler: setPopUpFlag, PopUpShowed} 

    const reduxState = useSelector(state => state)
    
     useEffect(() => {
        const localStorageState = localStorageReadRaw(storageID)
        const strRedux = JSON.stringify(reduxState)
            if(strRedux !== localStorageState){
                localStorageWrite(storageID, reduxState)          
            }
       
    }, [storageID, reduxState]);
    
   
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
