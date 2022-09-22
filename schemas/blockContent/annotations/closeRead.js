import { GiMagnifyingGlass } from 'react-icons/gi';

export default {
  name: 'closeRead',
  title: 'Close Read',
  type: 'object',
  blockEditor: {
    icon: GiMagnifyingGlass,
  },
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          "Explain Author's Purpose",
          'Use Text Evidence',
        ],
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
  ],
};
