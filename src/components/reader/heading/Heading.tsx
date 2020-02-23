// 设置单个的标题

import React from 'react';
import { SingleHeadingProps } from '..';

function Heading(propsValue: SingleHeadingProps) {
  const { level, children, ...props } = propsValue;
  return React.createElement(level || 'h2', props, children);
}

export default Heading;
