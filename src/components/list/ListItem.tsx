// list组件中，每一个item的内容

import React from 'react';
import moment from 'moment';
import { Note } from './index';

import './styles.less';

// item包括
// 文件夹图片 ：文章标题
// 我文章简述
// 作者，文件夹，分类标签，发布时间
function ListItem({ note }: { note: Note }) {
  return (
    <div className={'list-item-wrap'}>
      <div className={"item-title"}>
        <div className={"item-img-wrap"}><img src="/assets/img/logo.svg" alt="" /></div>
        <p>{note.title || '--'}</p>
      </div>
      <div className={'item-desc'}>{note.description || '--'}</div>
      <div className={'other-detail'}>
        <span>{`发布在${note.directoryName || '--'}`}</span>
        <span>{`写于 ${moment(note.createTime).format('YYYY-MM-DD HH:mm:ss')}`}</span>
      </div>
    </div>
  )
}

export default ListItem;
