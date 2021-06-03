import React from 'react'
import { FaGripLines } from 'react-icons/fa'

const doubleUnderlineRender = props => (
    <span style={
        { textDecoration: 'underline',
          textDecorationStyle: 'double',
          textDecorationColor: '#d4609c'
         }}>{props.children}</span>
  )
  

export default {
    title: 'Double Underline',
    value: 'doubleUnderline',
    blockEditor: {
        icon: FaGripLines,
        render: doubleUnderlineRender
    }
}
