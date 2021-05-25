import React from 'react' 
import './css/default.css'
//TODO: depending on acitivity type, choose and render top bar
//create portable text renders for different types
//figure out how to expel to xhtml
//expel to PDF with diff background
export const EpubPreview = ({ document }) => {
  const toPresent = document.draft ?? document.displayed
  return (
    <html>
      <head>
      </head>
        <body style={{}} >
          <div>
            <h1>
              { toPresent.title }
            </h1>
          </div>
        </body>
    </html>
    )

}
