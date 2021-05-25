import React from 'react'
import { FaCheck } from 'react-icons/fa'

const answerTextRender = props => (
    <span style={
        { color: '#d4609c' }}>{props.children}</span>
  )
  

export default {
    title: 'Answer Text',
    value: 'answerText',
    blockEditor: {
        icon: FaCheck,
        render: answerTextRender
    }
}