import { FaCheck } from 'react-icons/fa'

const answerTextRender = props => (
    <span style={
        { color: 'pink' }}>{props.children}</span>
  )
  

export default {
    title: 'Answer Text',
    value: 'answerText',
    blockEditor: {
        icon: FaCheck,
        render: answerTextRender
    }
}