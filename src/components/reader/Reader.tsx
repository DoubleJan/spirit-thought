// 通用阅读器

import React from 'react';
import Markdown from 'react-markdown';
// 生成目录
import toc from 'remark-toc';
import CodeBlock from './codeBlock';
import helper from '../../resource/helper';

import './styles/basic.less';
import './styles/reader.less';

function Reader() {

  return (
    <div className={'reader-wraper'}>
      <Markdown
        className={'markdown-reader'}
        source={helper}
        escapeHtml={false}
        renderers={{ code: CodeBlock }}
        plugins={[toc]}
      />
    </div>
  )
}

export default Reader;