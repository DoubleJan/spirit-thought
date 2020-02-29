// 通用阅读器

import React from 'react';
import Markdown from 'react-markdown';
// 生成目录
import toc from 'remark-toc';

import CodeBlock from './code/CodeBlock';
import HeadingBlock from './heading/HeadingBlock';
import HeadingDirectory from './directory/HeadingDirectory';

import Spin from '../spin/Spin';

import './styles/basic.less';
import './styles/reader.less';

function Reader({ content }: { content: string }) {

  return (
    <Spin spinning={true}>
      <div className={'reader-wraper'}>
        <HeadingDirectory content={content} />
        <Markdown
          className={'markdown-reader'}
          source={content}
          escapeHtml={false}
          renderers={{ code: CodeBlock, heading: HeadingBlock }}
          plugins={[toc]}
        />
      </div>
    </Spin>
  )
}

export default Reader;