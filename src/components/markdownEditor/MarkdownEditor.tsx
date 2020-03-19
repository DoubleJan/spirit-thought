// markdown编辑器
import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { useHistory } from "react-router-dom";
import { History } from 'history';
import Reader from '../reader/Reader';
import HeaderControl from './control/HeaderControl';
import Modal from './modal/Modal';
import { getContentTitle } from '@/utils';
import { PostContentProps } from './index.d';
import Constants from '@/constants';
import * as editorServ from './editorServ';


import './editor.less';
import 'codemirror/lib/codemirror.css';
import { routeros } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

// 请求接口
async function addContent(data: PostContentProps) {
  const res = await editorServ.addContent(data);
  if (res.code === '000000') {
    console.log('add content: ', res.data);
  }
}

// 文章内容发生变化
function handleChange(err: any, data: any, value: any, setInputs: Function, setContentTitle: Function) {
  setInputs(value);
  setContentTitle(getContentTitle(value));
}

// 点击提交按钮
function handleSubmit(setShowModal: Function, content: string) {
  setShowModal(true);
}

// 点击确定提交的回调，发送文章新增请求
// 将当前用户传给后端用于查询作者
function submitInput(history: History, data: PostContentProps) {
  
  const username = localStorage.getItem(Constants.storage.username) || undefined;
  const email = localStorage.getItem(Constants.storage.email) || undefined;

  if (username && email) {
    addContent({ ...data, username, email });
  } else {
    history.push('/login');
  }
}

function MarkdownEditor() {
  
  const history = useHistory();
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
        onSubmit={(data: PostContentProps) => submitInput(history, data)}
        inputTitle={inputs}
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