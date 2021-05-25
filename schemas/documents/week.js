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
            type: 'number',
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
}
