import { BsTypeStrikethrough } from 'react-icons/bs'

export default {
    name: 'correctedText',
    title: 'Corrected Text',
    type: 'object',
    blockEditor: {
        icon: BsTypeStrikethrough
    },
    fields: [
        {
            name: 'correction',
            title: 'Correction',
            type: 'string',
        },
    ],
}
