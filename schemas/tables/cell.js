export default {
    title: 'Table Cell',
    name: 'cell',
    type: 'object',
    fields: [
        {
            name: 'content',
            title: 'Cell content',
            type: 'array',
            of: [{ type: 'textbookBlockContent' }]
        },
    ],
    //TODO
    // preview: {
    //     select: {
    //         title: 'value',
    //         subtitle: 'anotherValue'
    //     }
    // }
};