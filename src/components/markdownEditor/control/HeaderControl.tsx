// 头部工具栏
import React, { useState, useEffect } from 'react';
// import Select from '../../select/Select';
import moment from 'moment';

// 文章分类的数据
const contentType = [
  { value: 'note', label: '笔记' },
  { value: 'article', label: '文章' },
  { value: 'code', label: '源码' },
]

// 主题
// const themeOptions = [
//   { value: 'mdn-like', label: 'mdn-like' },
//   { value: 'material', label: 'material' },
// ]

// function selectTheme(option: any, setTheme: Function) {
//   setTheme(option.value);
// }

// 点击提交的回调
function handleSubmit(onSubmit: Function) {
  onSubmit();
}

function HeaderControl({ contentTitle, onSubmit }: { contentTitle?: string, onSubmit: Function }) {

  const [createTime, setCreateTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCreateTime(moment().format('YYYY-MM-DD HH:mm:ss'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="editor-header-control">
      <div className="title-wrap">
        <div className={'title-inner'}>
          <img src="/assets/img/back.svg" alt="logo" />
          <span>创作中心</span>
        </div>
        <span className="content-title">{contentTitle || ''}</span>
      </div>

      <div className="editor-button-wrap">

        {/* <Select options={contentType} placeholder={'文章分类'} onSelect={(o) => handleContentType(o)} />
        <Select options={contentType} placeholder={'分类目录'} /> */}
        <div className="editor-button-item">
          <img src="/assets/img/save.svg" alt="" />
          <span>暂存</span>
        </div>
        <div className="editor-button-item" onClick={() => handleSubmit(onSubmit)}>
          <img src="/assets/img/submit.svg" alt="" />
          <span>提交</span>
        </div>
        <div className="editor-time">
          <span>{createTime}</span>
        </div>
      </div>
    </div>
  )
}

export default HeaderControl;
