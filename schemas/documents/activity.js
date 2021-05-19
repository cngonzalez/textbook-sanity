import textbookBlockContent from '../blockContent/textbookBlockContent'
export default {
    name: 'activity',
    title: 'Activity',
    type: 'document',
    fields: [
        {
            name: 'bookSection',
            title: 'Book Section',
            type: 'reference',
            to: [{type: 'bookSection'}]
        },
        {
            name: 'focus',
            title: 'Focus',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'textbookBlockContent'}]
        },
        {
            name: 'exercises',
            title: 'Exercises',
            type: 'array',
            of: [{type: 'exercise'}]
        },
        {
            name: 'characterBlurb',
            title: 'Character Blurb',
            type: 'string'
        },
    ],
}