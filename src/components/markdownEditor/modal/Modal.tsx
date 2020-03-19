// 提交时的弹框
import React, { useState, useEffect } from 'react';
import Select from './../select/Select';
import { ModalProps, PostContentProps } from './../index.d';
import './modal.less';
import { getContentTitle } from '@/utils';
import * as editorServ from './../editorServ';

// 文章分类
const contentTypeArray = [
  { value: 'note', label: '笔记' },
  { value: 'article', label: '文章' },
  { value: 'code', label: '源码' },
]



// 获取文章目录
async function getEditorDirectory(type: string, setDirectory: Function) {
  const res = await editorServ.getNoteDirectory({ type });

  if (res.code === '000000' && Array.isArray(res.data)) {
    console.log('res: ', res);
    setDirectory(res.data.map((d: any) => ({ value: d.id, label: d.name })))
  }
}

// 处理textarea的事件
function handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>, setDesc: Function) {
  event.persist();
  if (event.target) {
    setDesc(event.target.value);
  } else if (event.nativeEvent && event.nativeEvent.srcElement) {
    setDesc((event.nativeEvent.srcElement as any).value);
  }
}

function handleSubmit(data: PostContentProps, setShowModal: Function, onSubmit?: Function) {
  console.log('data: ', data);
  onSubmit && onSubmit(data);
  setShowModal(false);
}

function Modal({ showModal, setShowModal, onSubmit, inputTitle }: ModalProps) {
  const [displayNone, setDisplayNone] = useState(true);
  const [selectType, setSelectype] = useState('note');
  const [directory, setDirectory] = useState([]);

  // 文章提交的对象
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [dir, setDir] = useState('');
  const [desc, setDesc] = useState('');

  // 根据类型获取文件目录
  useEffect(() => {
    getEditorDirectory(selectType, setDirectory);
  }, [selectType]);

  // 根据输入文章更新标题
  useEffect(() => {
    const t = getContentTitle(inputTitle);
    setTitle(t);
  }, [inputTitle]);

  return (
    <div className={`editor-modal-outer editor-modal-outer-is-${!displayNone ? 'show' : 'hidden'}`}>
      <div
        className={`editor-modal-shadow modal-shadow-is-${showModal ? 'show' : 'hidden'}`}
        onClick={() => setShowModal(false)}
        onAnimationEnd={() => !showModal && setDisplayNone(true)}
        onAnimationStart={() => showModal && setDisplayNone(false)}
      >
      </div>
      <div id={'editor-submit'} className={`editor-modal-wrap ${showModal ? 'modal-wrap-is-show' : 'modal-wrap-is-hidden'}`}>
        <div className={"editor-modal-title"}>发布文章</div>
        <input
          className={'input disabled'}
          name="title"
          type="text"
          placeholder="文章标题"
          disabled={true}
          value={title}
        />
        <Select
          style={{ marginTop: '1rem' }}
          placeholder={'文章分类'}
          name="contentType"
          optionList={contentTypeArray}
          onSelect={(value: string) => { setType(value); setDirectory([]); getEditorDirectory(value, setDirectory) }}
        />
        <Select
          style={{ marginTop: '1rem' }}
          placeholder={'分类目录'}
          name="directory"
          optionList={directory}
          onSelect={(value: string) => setDir(value)}
        />
        <textarea
          className={'input textarea'}
          name="description"
          cols={30}
          rows={4}
          placeholder="文章描述"
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => handleTextAreaChange(event, setDesc)}
        />
        <button
          type={'submit'}
          className={'button'}
          onClick={() => handleSubmit({ title, type, directory: dir, description: desc, content: inputTitle }, setShowModal, onSubmit)}
        >
          提交
        </button>
      </div>
    </div>

  )

}

export default Modal;

