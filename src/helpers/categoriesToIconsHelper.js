const iconsCategoriesMap = {
    'Task': 'faTasks',
    'Random Thought': 'faRandom',
    'Idea': 'faLightbulb',
    'Quote': 'faQuoteRight',
  };
const categoryToIcon = (category, iconsObj) => iconsObj[iconsCategoriesMap[category]]

export default categoryToIcon