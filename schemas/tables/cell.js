export default {
    title: 'Table Cell',
    name: 'cell',
    type: 'object',
    fields: [
        {
            name: 'content',
            title: 'Cell content',
            type: 'string' 
        },
        {
            name: 'style',
            title: 'Style',
            type: 'string',
            options: {
              list: [
                {title: 'None', value: ''},
                {title: 'Bold', value: 'strong'},
                {title: 'Italic', value: 'em'},
                {title: 'Answer Text', value: 'answerText'},
                {title: 'Double Underline', value: 'doubleUnderline'},
                {title: 'Filled Blank', value: 'filledBlank'},
                {title: 'Highlight', value: 'highlight'},
                {title: 'Red Underline', value: 'redUnderline'},

              ]
            }
        },
    ],
     preview: {
         select: {
             title: 'content',
         }
      },
      prepare(selection) {
        const { title } = selection
        return {
          title: content
        }
      }
}
