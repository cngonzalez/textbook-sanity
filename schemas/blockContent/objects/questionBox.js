export default {
    name: 'questionBox',
    title: 'Question Box',
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
