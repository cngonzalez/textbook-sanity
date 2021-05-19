import { FaUnderline } from 'react-icons/fa'

const filledBlankRender = props => (
    <span style={
        { textDecoration: 'underline',
          color: 'pink'
         }}>{props.children}</span>
  )

export default {
    title: 'Filled Blank',
    value: 'filledBlank',
    blockEditor: {
        icon: FaUnderline,
        render: filledBlankRender
    }
}
