import * as annotations from './annotations'
import * as decorators from './decorators'

export default {
    name: 'textbookBlockContent',
    title: 'Textbook Block Content',
    type: 'array',
    of: [{type: 'block',
          styles: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              ...Object.values(decorators),
            ],
            annotations: Object.values(annotations)
          },
          of: [
            {
              type: 'object',
              name: 'blank',
              fields: [{name: 'disabled', type: 'boolean'}],
              preview: {
                prepare: () =>  ({title: 'Blank'})
              }
            }
          ],
        },
        {type: 'modelBox'},

    ]
}
