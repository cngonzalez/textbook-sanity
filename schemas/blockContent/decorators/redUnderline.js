import React from 'react';

const underlineIcon = () => (
  <span style={{ fontWeight: 'bold', color: 'red' }}>__</span>
);
const underlineRender = (props) => (
  <span style={
        {
          textDecoration: 'underline',
          color: '#d4609c',
        }
}
  >
    {props.children}
  </span>
);

export default {
  title: 'Red Underline',
  value: 'redUnderline',
  blockEditor: {
    icon: underlineIcon,
    render: underlineRender,
  },
};
