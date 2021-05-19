
const underlineIcon = () => (
    <span style={{ fontWeight: 'bold' }}>-</span>
  )
const underlineRender = props => (
    <span style={
        { textDecoration: 'underline',
          color: red }}>{props.children}</span>
  )
  

export default {
    title: 'Red Underline',
    value: 'redUnderline',
    blockEditor: {
        icon: underlineIcon,
        render: underlineRender
    }
}