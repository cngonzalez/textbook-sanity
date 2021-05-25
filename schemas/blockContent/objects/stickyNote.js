export default {
    name: 'stickyNote',
    title: 'Sticky Note',
    type: 'object',
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}]
        },
    ],
}
