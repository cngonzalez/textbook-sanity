import textbookBlockContent from '../blockContent/textbookBlockContent'

export default {
    name: 'activity',
    title: 'Activity',
    type: 'document',
    fields: [
        {
            name: 'unitSection',
            title: 'Unit Section',
            type: 'reference',
            to: [{type: 'unitSection'}]
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
            name: 'printContent',
            title: 'Print Content',
            type: 'textbookBlockContent'
        },
        {
            name: 'printExercises',
            title: 'Print Exercises',
            type: 'array',
            of: [{type: 'exercise'}]
        },
        {
            name: 'characterBlurb',
            title: 'Character Blurb',
            type: 'string'
        },
        {
            name: 'digitalContent',
            title: 'Digital Content',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'digitalExercises',
            title: 'Digital Exercises',
            type: 'array',
            of: [
              {type: 'exercise'},
              {type: 'file'}
            ]
        },
    ],
}
