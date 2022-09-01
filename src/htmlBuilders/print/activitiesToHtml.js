const blocksToHtml = require('@sanity/block-content-to-html')
const h = blocksToHtml.h

export const getSectionColor = (section) => {
  const colorMap = {
    'Introduction': ['#244b86', '#3274a3', '#e5f2f3'],
    'Reading Workshop': ['#387f47'],
    'Reading-Writing Bridge': ['#244b86', '#3274a3', '#e5f2f3'],
    'Writing Workshop': ['#633b7e','#543667', '#cbb3bd'],
    'Weekly Launch': '#387f47',
    'Unit Theme': ['#244b86', '#3274a3', '#e5f2f3']
  }
  return colorMap[section]
}

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
            'border-radius': '5px',
            margin: '50px 30px'

          },
            innerHTML: content
          })
      }
  }
}


export const createHTMLString = (doc) => {
  const [mainColor, accentColor, backgroundColor] = getSectionColor(doc.unitSection) 
  return `
      <head>
        <link rel="stylesheet" type="text/css" href="http://localhost:4000/static/print.css" />
      </head>
        <body style="background-color: ${backgroundColor};">
          <header style="background-color: ${mainColor}; border: none; position: relative; height: 200px; padding:0;">
            <h3 style="padding: 70px 30px; margin:0;">
              <strong>${doc.unitSection}</strong>${doc.focus ? (': ' + doc.focus) :  ""}
            </h2>
            <svg style="
                  position: absolute;
                  bottom: 0;
                  width: 100%;
                  height: 10vw;
            "
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" preserveAspectRatio="none">
              <polygon fill="${backgroundColor}" points="0,75 100,25 100,100"/>
            </svg>
          </header>
          <div style="padding:3rem; background-color: ${backgroundColor};">
            <div style="font-size: 18px;
                        line-height: 20px;
                        padding: 2rem;
                        background-color: white;
                        border: solid ${mainColor};
                        border-width: 3px 4px 3px 5px;
                        border-radius:95% 4% 92% 5%/4% 95% 6% 95%;
                        transform: rotate(2deg);
                        ">
              <div style="transform: rotate(-2deg);">
                <h2 style="font-style: normal; color: ${mainColor}">
                  ${doc.title}
                </h2>
                ${blocksToHtml({blocks: (doc.printContent ?? []), serializers })}
              </div>
            </div>
          </div>
        </body>
`}
