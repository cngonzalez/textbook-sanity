export default {
    name: 'week',
    title: 'Week',
    type: 'document',
    fields: [
        {
            name: 'number',
            title: 'Number',
            type: 'number',
        },
        {
            name: 'name',
            title: 'title',
            type: 'array',
            of: [
                { type: 'reference',
                  to: [
                    { type: 'activity' },
                  ]},
            ],
        },
    ],
}