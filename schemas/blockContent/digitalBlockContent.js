export default {
    name: 'digitalBlockContent',
    title: 'Digital Block Content',
    type: 'array',
    of: [{type: 'block',
          styles: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
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
        {type: 'file'},
        {type: 'modelBox'},

    ]
}
