export default {
    name: 'modelBox',
    title: 'Model Box',
    type: 'object',
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        },
    ]
}
