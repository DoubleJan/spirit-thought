// markdown编辑器
import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import Reader from '../reader/Reader';
import HeaderControl from './control/HeaderControl';
import Modal from './modal/Modal';

import './editor.less';
import 'codemirror/lib/codemirror.css';

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
function handleSubmit(setShowModal: Function, content: string) {
  setShowModal(true);
}

function submitInput(content: string) {
  console.log('brfore sub: ', content)
}

function MarkdownEditor() {

  const [inputs, setInputs] = useState('');
  const [contentTitle, setContentTitle] = useState('');
  const [showModal, setShowModal] = useState(false);

  const options = {
    mode: 'markdown',
    theme: 'mdn-like',
    lineNumbers: true,
    value: '# Markdown Editor'
  }

  return (
    <div className={'markdown-editor-outer-wrap'}>
      <Modal 
        showModal={showModal} 
        setShowModal={setShowModal}
        onSubmit={() => submitInput(inputs)}
      />
      <HeaderControl contentTitle={contentTitle} onSubmit={() => handleSubmit(setShowModal, inputs)} />
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