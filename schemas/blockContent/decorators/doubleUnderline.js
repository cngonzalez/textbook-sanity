
import { FaGripLines } from 'react-icons/fa'

const doubleUnderlineRender = props => (
    <span style={
        { textDecoration: 'underline',
          textDecorationStyle: 'double',
          textDecorationColor: 'red'
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