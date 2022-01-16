import React from 'react';
import categoriesSelector from "../helpers/elements.js";

const NoteAddPopUp = (noteCategories = []) => {

    return (
                <div className="noteAddPopUp"> 
                <button class="closeButton">X</button>
                    <form>
                      <fieldset>
                        <span id="popUpAddIcon"></span>
                        <label>Name: <input type="text" name="name" maxlength="50"/></label>
                        <label>Category: {categoriesSelector(noteCategories)}</label>
                        <label>Content: <textarea name="content" rows="1" cols="70"></textarea></label>
                      </fieldset>
                      <div class="popUpControls"> 
                        <button type="submit">Create</button> 
                         <input type="reset" value="Clear"/>
                      </div>
                    </form>
                </div>
        )
    }
export default NoteAddPopUp 