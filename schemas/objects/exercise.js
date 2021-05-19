export default {
    name: 'exercise',
    title: 'Exercise',
    type: 'object',
    fields: [
        {
            name: 'myTurnPrompt',
            title: 'My Turn Prompt',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'exercise',
            title: 'Exercise',
            type: 'array',
            of: [{ type: 'textbookBlockContent' }]
        },
    ],
}