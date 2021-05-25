const blocksToHtml = require('@sanity/block-content-to-html')
const h = blocksToHtml.h

const serializers = {
  types: {
    modelBox: (props) => {
      const content = blocksToHtml({blocks: props.node.content ?? []})
      return h('div',
        {
          style: {
            'background-color': '#f8fbfd',
            border: "solid 3px #244b86",
            padding: '10px',
            'border-radius': '5px'
          },
            innerHTML: content
          })
      }
  }
}

const getSectionColor = (section) => {
  const colorMap = {
    'Introduction': '#244b86',
    'Reading Workshop': '#387f47',
    'Reading-Writing Bridge': '#244b86',
    'Writing Workshop': '#633b7e',
    'Weekly Launch': '#387f47',
    'Unit Theme': '#244b86',
  }
  return colorMap[section]
}

export const createHTMLString = (doc) => {
return `
      <head>
      </head>
        <body>
          <header style="background-color: ${getSectionColor(doc.unitSection)}">
            <h5>
              <strong>${doc.unitSection}</strong>${doc.focus ? (': ' + doc.focus) :  ""}
            </h5>
          </header>
          <div style="margin-top: 150px; padding: 0 3rem">
            <h5 style="font-style: normal; color: #244b86;">
              ${doc.title}
            </h5>
            <div style="font-size: 18px; line-height: 22px; font-weight: normal;">
              ${blocksToHtml({blocks: (doc.digitalContent ?? []), serializers })}
            </div>
          </div>
        </body>
`}
