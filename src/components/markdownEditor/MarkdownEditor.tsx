// markdown编辑器
import React, { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import Reader from '../reader/Reader';
import HeaderControl from './HeaderControl';
import * as editorServ from './editorServ';
import './editor.less';
import 'codemirror/lib/codemirror.css';

// 获取文章目录
async function getEditorDirectory(type: string) {
  const res = await editorServ.getNoteDirectory({ type });
  console.log('res: ', res);
}

// 文章内容发生变化
function handleChange(err: any, data: any, value: any, setInputs: Function, setContentTitle: Function) {
  setInputs(value);
  const arr = value.match(/#+\s\S+/g);
  if (Array.isArray(arr)) {
    const title = arr.find((v: string) => v.substr(0, 2) === '# ');
    if (title != null) {
      setContentTitle(title.substr(2));
      return;
    }
  }
  setContentTitle('');
}

// 点击提交按钮
function handleSubmit(content: string) {
  console.log('value: ', content);
  // getEditorDirectory('note');
}

function MarkdownEditor() {

  const [inputs, setInputs] = useState('');
  const [contentTitle, setContentTitle] = useState('');

  const options = {
    mode: 'markdown',
    theme: 'mdn-like',
    lineNumbers: true,
    value: '# Markdown Editor'
  }

  return (
    <div className={'markdown-editor-outer-wrap'}>
      <HeaderControl contentTitle={contentTitle} onSubmit={() => handleSubmit(inputs)} />
      <div className="markdown-editor-wrap">
        <div className={'editor-wrap'}>
          <CodeMirror 
            onChange={(e, d, v) => handleChange(e, d, v, setInputs, setContentTitle)} 
            options={options} 
          />
        </div>
        <div className="review-wrap">
          <Reader content={inputs} isDirectory={false} fixedHeight={5} />
        </div>
      </div>
    </div>
  )
}

export default MarkdownEditor;