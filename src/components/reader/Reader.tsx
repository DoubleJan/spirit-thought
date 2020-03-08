// 通用阅读器

import React from 'react';
import Markdown from 'react-markdown';
// 生成目录
import toc from 'remark-toc';

import CodeBlock from './code/CodeBlock';
import HeadingBlock from './heading/HeadingBlock';
import HeadingDirectory from './directory/HeadingDirectory';
import { ReaderProps } from'./index.d';

import './styles/basic.less';
import './styles/reader.less';

function Reader({ content, isDirectory = true, fixedHeight = 0 }: ReaderProps) {

  return (  
      <div 
        className={'reader-wraper'}
        style={{height: `${fixedHeight ? `calc(100vh - ${fixedHeight}rem)` : '100%'}`}}
      >
        { isDirectory && <HeadingDirectory content={content} />}
        <Markdown
          className={'markdown-reader'}    
          source={content}
          escapeHtml={false}
          renderers={{ code: CodeBlock, heading: HeadingBlock }}
          plugins={[toc]}
        />
      </div>
  )
}

export default Reader;