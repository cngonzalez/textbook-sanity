export const getSectionColor = (section) => {
  const colorMap = {
    Introduction: '#244b86',
    'Reading Workshop': '#387f47',
    'Reading-Writing Bridge': '#244b86',
    'Writing Workshop': '#633b7e',
    'Weekly Launch': '#387f47',
    'Unit Theme': '#244b86',
  };
  return colorMap[section];
};
