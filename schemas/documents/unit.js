export default {
  name: 'unit',
  title: 'Unit',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'essentialQuestion',
      title: 'Essential Question',
      type: 'string',
    },
    {
      name: 'learningGoals',
      title: 'Learning Goals',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'section',
              type: 'reference',
              to: [{ type: 'unitSection' }],
            },
            {
              name: 'goal',
              title: 'Goal',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'weeks',
      title: 'Week',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'week' }] },
      ],
    },
  ],
};
