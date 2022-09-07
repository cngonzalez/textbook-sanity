import getSectionColor from '../utils/getSectionColor';

const blocksToHtml = require('@sanity/block-content-to-html');

const { h } = blocksToHtml;

const serializers = {
  types: {
    modelBox: (props) => {
      const content = blocksToHtml({ blocks: props.node.content ?? [] });
      return h(
        'div',
        {
          style: {
            'background-color': '#f8fbfd',
            border: 'solid 3px #244b86',
            padding: '10px',
            'border-radius': '5px',
          },
          innerHTML: content,
        },
      );
    },
  },
};

export const createHTMLString = (doc) => {
  const color = getSectionColor(doc);
  const mainColor = color[700].hex;
  return `
      <head>
      </head>
        <body>
          <header style="background-color: ${mainColor};">
            <h5>
              <strong>${doc ? doc.unitSection : ''}</strong>${(doc && doc.focus) ? (`: ${doc.focus}`) : ''}
            </h5>
          </header>
          <div style="margin-top: 150px; padding: 0 3rem">
            <h5 style="font-style: normal; color: #244b86;">
              ${doc.title}
            </h5>
            <div style="font-size: 18px; line-height: 22px; font-weight: normal;">
              ${blocksToHtml({ blocks: ((doc && doc.digitalContent) ?? []), serializers })}
            </div>
          </div>
        </body>
`;
};
