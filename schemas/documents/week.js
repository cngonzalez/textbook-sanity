export default {
    name: 'week',
    title: 'Week',
    type: 'document',
    fields: [
        {
            name: 'unit',
            title: 'Unit',
            type: 'reference',
            to: [{ type: 'unit' }],
        },
        {
            name: 'number',
            title: 'Number',
            type: 'string',
            options: {
              list: [
                'Introduction',
                '1',
                '2',
                '3',
                '4',
                '5'
              ]
            }
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'reference',
                  to: [
                    { type: 'activity' },
                  ]},
            ],
        },
    ],
    preview: {
      select: {
        unit: 'unit.name',
        week:  'number'
      },
      prepare: ({
        unit,
        week
        }) => ({
          title: `${unit ?? ""}: ${(week == 'Introduction') ? week : ('Week ' + week)}`
        })
    }
}
