import { faTasks, faRandom, faLightbulb, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const iconsObj = {faTasks, faRandom, faLightbulb, faQuoteRight}
const iconsCategoriesMap = {
    'Task': 'faTasks',
    'Random Thought': 'faRandom',
    'Idea': 'faLightbulb',
    'Quote': 'faQuoteRight',
  };
const categoryToIcon = (category) => iconsObj[iconsCategoriesMap[category]]

export default categoryToIcon