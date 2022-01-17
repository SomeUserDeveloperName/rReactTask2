import React from 'react';
import CategoriesSelector from '../components/categoriesSelector.js';

const NewNoteAddPopUp = ({showHideHandler, PopUpShowed}) => {
    const PopUpCss = `sectionPopUp showPopUpSection ${PopUpShowed ?  '' : 'popupHidden'}` 
    return (
               <section className={PopUpCss}>
                <div className="noteAddPopUp"> 
                <button className="closeButton" onClick={() => showHideHandler(false)}>X</button>
                    <form>
                      <fieldset>
                        <span id="popUpAddIcon"></span>
                        <label htmlFor="newNoteName">Name: </label>
                        <input id="newNoteName" type="text" name="name" max-length="50"/>
                        <label htmlFor="newNoteCategory">Category: </label>
                           <CategoriesSelector id={'newNoteCategory'}/>
                        <label htmlFor="newNoteContent">Content: </label>
                        <textarea id="newNoteContent" name="content" rows="1" cols="40"></textarea>
                      </fieldset>
                      <div className="popUpControls"> 
                        <button type="submit">Create</button> 
                         <input type="reset" value="Clear"/>
                      </div>
                    </form>
                </div>
              </section>
        )
    }
export default NewNoteAddPopUp 