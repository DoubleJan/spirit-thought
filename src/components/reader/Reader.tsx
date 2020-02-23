// 通用阅读器

import React from 'react';
import Markdown from 'react-markdown';
// 生成目录
import toc from 'remark-toc';

import CodeBlock from './code/CodeBlock';
import HeadingBlock from './heading/HeadingBlock';
import helper from '../../resource/helper';
import Directory from './directory/Directory';
import HeadingDirectory from './directory/HeadingDirectory';

import './styles/basic.less';
import './styles/reader.less';


function Reader() {
  // const { getDirectory, pushDirectory } = Directory();
  const directory = Directory();

  return (
    <div className={'reader-wraper'}>
      <HeadingDirectory content={helper}/>
      <Markdown
        className={'markdown-reader'}
        source={helper}
        escapeHtml={false}
        renderers={{ code: CodeBlock, heading:  (props) => <HeadingBlock {...{...directory, ...props}} /> }}
        plugins={[toc]}
      />

    </div>
  )
}

export default Reader;