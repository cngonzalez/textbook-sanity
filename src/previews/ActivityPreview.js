import React from 'react' 
import './css/default.css'
import  { createHTMLString } from '../htmlBuilders/digital/activitiesToHtml'

//create portable text renders for different types
//figure out how to expel to xhtml
//expel to PDF with diff background
//for reading activity, upload "blank" versions with page breaks
//expel whole deal as unit

export const ActivityPreview = ({ document }) => {
  const toPresent = document.draft ?? document.displayed
  return (
    <body dangerouslySetInnerHTML={{__html: createHTMLString(toPresent)}} /> 
    )

}
