export default {
  name: 'learningGoal',
  title: 'Learning Goal',
  type: 'document',
  fields: [
    {
      name: 'goal',
      title: 'Goal',
      type: 'string',
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'reference',
      to: [{ type: 'unit' }],
    },
  ],
};
