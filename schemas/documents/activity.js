import textbookBlockContent from '../blockContent/textbookBlockContent'

export default {
    name: 'activity',
    title: 'Activity',
    type: 'document',
    fields: [
        {
            name: 'unitSection',
            title: 'Unit Section',
            type: 'string',
            options: {
              list: [
                'Introduction',
                'Unit Theme',
                'Weekly Launch',
                'Reading Workshop',
                'Writing Workshop',
                'Reading-Writing Bridge'
              ]
            }
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
            name: 'learningGoal',
            title: 'Learning Goal',
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
            name: 'digitalContent',
            title: 'Digital Content',
            type: 'textbookBlockContent'
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
        {
            name: 'characterBlurb',
            title: 'Character Blurb',
            type: 'string'
        },
    ],
    preview: {
      select: {
        title: 'title',
        unitSection: 'unitSection',
        focus: 'focus'
      },
      prepare: ({
        title,
        unitSection,
        focus
        }) => ({
          title: `${title} (${unitSection})`,
          subtitle: focus
        })
    }
}
