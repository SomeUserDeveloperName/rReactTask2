import React from 'react';

const categoriesSelector = (noteCategories = [], defaultValue = '') => {

    return (
            <select id="categories" name="category">
                {defaultValue ? '' : <option selected disabled hidden>Choose cat</option>}
                {noteCategories.map((cat) => {
                    return (cat === defaultValue ? <option value={cat} selected>{cat}</option>
                                                 : <option value={cat}>{cat}</option>
                            )
                })}
            </select>
    )
} 
export default categoriesSelector