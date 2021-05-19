export default {
    name: 'unit',
    title: 'Unit',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string',
        },
        {
            name: 'weeks',
            title: 'Weeks',
            type: 'array',
            of: [{ type: 'week' }],
        },
    ],
}