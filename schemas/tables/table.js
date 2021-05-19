import RowsInput from 'part:@ssfbank/sanity-plugin-byo-table/rows-input';

export default {
    name: 'table',
    title: 'table',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'rows',
            title: 'Table Rows',
            type: 'array',
            of: [
              {
                type: 'row',
              }
            ],
            inputComponent: RowsInput
          }
        ],
    preview: {
        select: {
        title: 'title'
        }
    }
}