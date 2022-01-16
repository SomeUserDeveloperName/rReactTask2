const categoryIconEl = (classes = []) => `<i class="${classes.join(' ')}" aria-hidden="true"></i>`;

const categoriesSelector = (noteCategories = [], defaultValue = '') =>  
        `<select id="categories" name="category">
            ${defaultValue ? '' : '<option selected disabled hidden>Choose cat</option>'}
            ${noteCategories.map((cat) => `<option value='${cat}' ${cat === defaultValue ? 'selected' : ''}>${cat}</option>`)}
        </select>`;

const icon = (selector) => `<i class="${selector}" aria-hidden="true"></i>`

export { categoryIconEl, categoriesSelector, icon }

