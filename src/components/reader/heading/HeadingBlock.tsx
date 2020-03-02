// 标题设置锚点和侧边栏

import React from 'react';
import Heading from './Heading';
import { useLocation } from 'react-router-dom'
import { HeadingProps } from '..';
import '../styles/basic.less';


function HeadingBlock(props: HeadingProps) {
  const { level, children } = props;
  const location = useLocation();

  if (level && Array.isArray(children) && children[0] && children[0].props) {
    const value = children[0].props.value;
    
    return (
      <Heading level={`h${level}`} id={value} className={'reader-heading-wrap'}>
        {/* <a href={`#${location.pathname}/${value}${location.search || ''}`}></a> */}
        <span>{children}</span>
      </Heading>
    )
  } else {
    return <>{children}</>;
  }
}

export default HeadingBlock;