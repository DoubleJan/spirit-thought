// 标题设置锚点和侧边栏

import React, { useEffect } from 'react';
import Heading from './Heading';
import { HeadingProps, HeadingLevel } from '..';
import '../styles/basic.less';


function HeadingBlock(props: HeadingProps) {
  const { level, children, pushDirectory, getDirectory } = props;

  if (level && Array.isArray(children) && children[0] && children[0].props) {
    const value = children[0].props.value;
    pushDirectory({ level: `h${level}` as HeadingLevel, title: children[0].props.value });
    
    return (
      <Heading level={`h${level}`} id={value} className={'reader-heading-wrap'}>
        <a href={`#${value}`}><span>{children}</span></a>
      </Heading>
    )
  } else {
    return <>{children}</>;
  }
}

export default HeadingBlock;