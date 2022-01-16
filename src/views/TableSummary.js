import React from 'react';
import {useSelector} from 'react-redux';
import NoRecords from '../components/noRecords';
import ThNotesSummaryTable from '../components/thNotesSummary';
import TrNotesSummaryTable from '../components/trNotesSummary';

//Summary Table item component
const TableSummary = () => {
    //Make aggregated Array of objects
    const usedNotesCategories = [];
    const notesAll = useSelector(state => state.notes.notes)
    notesAll.forEach(note => usedNotesCategories.includes(note.category) 
                                ? "" 
                                : usedNotesCategories.push(note.category))

    const notesMapArray = usedNotesCategories.map(cat => ( 
        { "category": cat,
          "active": notesAll.filter(note => (note.category === cat && !note.archived)).length,
          "archived": notesAll.filter(note => (note.category === cat && note.archived)).length,
        }))

    return (
        <section className="summaryTable">
         <ThNotesSummaryTable />
            <div className="tableBody">
                {notesMapArray.length ? notesMapArray.map(item => <TrNotesSummaryTable key={item.category} item={item}/>)
                                      : <NoRecords />
                }
            </div>
        </section>   
    );
}

export default TableSummary;