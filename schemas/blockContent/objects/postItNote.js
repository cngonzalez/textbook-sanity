export default {
    name: 'postItNote',
    title: 'postItNote',
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