export default {
    name: 'row',
    title: 'row',
    type: 'object',
    fields: [
        {
            name: 'cells',
            title: 'Cells',
            type: 'array',
            of: [{type: 'cell'}]
        },
    ],
}