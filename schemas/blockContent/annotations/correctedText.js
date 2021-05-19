import { FaStrikeThrough } from 'react-icons/fa'

export default {
    name: 'correctedText',
    title: 'Corrected Text',
    type: 'object',
    blockEditor: {
        icon: FaStrikeThrough
    },
    fields: [
        {
            name: 'correction',
            title: 'Correction',
            type: 'string',
        },
    ],
}