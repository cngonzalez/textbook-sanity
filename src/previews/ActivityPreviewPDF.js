import React from 'react' 
import './css/default.css'
import  { createHTMLString } from '../htmlBuilders/print/activitiesToHtml'

//expel to PDF with diff background
//for reading activity, upload "blank" versions with page breaks
//expel whole deal as unit

export const ActivityPreviewPDF = ({ document }) => {
  const toPresent = document.draft ?? document.displayed
  return (
    <body dangerouslySetInnerHTML={{__html: createHTMLString(toPresent)}} /> 
    )

}
