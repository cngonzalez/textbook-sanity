import { toPlainText } from '../helpers'

export default {
    name: 'exercise',
    title: 'Exercise',
    type: 'object',
    fields: [
        {
            name: 'exerciseType',
            title: 'Exercise Type',
            type: 'string',
            options: {
              list: [
                {title: 'My Turn', value: 'myTurn'},
                {title: 'Turn and Talk', value: 'turnAndTalk'},
              ]
            }
        },
        {
            name: 'prompt',
            title: 'Prompt',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'exercise',
            title: 'Exercise',
            type: 'textbookBlockContent'
        },
    ],
     preview: {
         select: {
             title: 'prompt',
         }
      },
      prepare(selection) {
        const { title } = selection
        return {
          title: toPlainText(title)
        }
      }
}
