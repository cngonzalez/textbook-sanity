import React from 'react';

const highlightIcon = () => (
  <span style={{ fontWeight: 'bold' }}>H</span>
);
const highlightRender = (props) => (
  <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>
);

export default {
  title: 'Highlight',
  value: 'highlight',
  blockEditor: {
    icon: highlightIcon,
    render: highlightRender,
  },
};
