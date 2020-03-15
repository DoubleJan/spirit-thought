// 提交时的弹框
import React, { useState, useEffect } from 'react';
import Select from './../select/Select';
import { ModalProps } from './../index.d';
import './modal.less';
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

function handleSubmit(setShowModal: Function, onSubmit?: Function) {
  onSubmit && onSubmit();
  setShowModal(false);
}

function Modal({ showModal, setShowModal, onSubmit }: ModalProps) {
  console.log('showModal: ', showModal);
  const [displayNone, setDisplayNone] = useState(true);
  const [selectType, setSelectype] = useState('note');
  const [directory, setDirectory] = useState([]);

  useEffect(() => {
    getEditorDirectory(selectType, setDirectory);
  }, [selectType]);

  return (
    <div className={`editor-modal-outer editor-modal-outer-is-${!displayNone ? 'show' : 'hidden'}`}>
      <div
        className={`editor-modal-shadow modal-shadow-is-${showModal ? 'show' : 'hidden'}`}
        onClick={() => setShowModal(false)}
        onAnimationEnd={() => !showModal && setDisplayNone(true)}
        onAnimationStart={() => showModal && setDisplayNone(false)}
      >
      </div>
      <div className={`editor-modal-wrap ${showModal ? 'modal-wrap-is-show' : 'modal-wrap-is-hidden'}`}>
        <div className={"editor-modal-title"}>发布文章</div>
        <input className={'input disabled'} name="title" type="text" placeholder="文章标题" disabled={true} />
        <Select 
          style={{marginTop: '1rem'}} 
          placeholder={'文章分类'} 
          name="contentType" 
          optionList={contentTypeArray}
          onSelect={(value: string) => { setDirectory([]); getEditorDirectory(value, setDirectory)}}
        />
        <Select 
          style={{marginTop: '1rem'}} 
          placeholder={'分类目录'} 
          name="directory" 
          optionList={directory}
        />
        <input className={'input'} name="directory" type="text" placeholder="分类目录" />
        <textarea className={'input textarea'} name="description" cols={30} rows={4} placeholder="文章描述" />
        <button type={'submit'} className={'button'} onClick={() => handleSubmit(setShowModal, onSubmit)}>
          提交
        </button>
      </div>
    </div>

  )

}

export default Modal;

