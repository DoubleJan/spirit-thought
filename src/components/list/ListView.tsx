// 用于note，article，code页面的list组件主体

import React from 'react';
import ListItem from './ListItem';
import ListMenu from './ListMenu';
import { DirectoryList, NoteList } from './index';

import './styles.less';

function initListItem (noteList: NoteList) {
  if (Array.isArray(noteList)) {
    return noteList.map((item, i) => <ListItem key={i} note={item} />)
  }
  return null;
}

function ListView({ directoryList, noteList }: { directoryList: DirectoryList, noteList: NoteList }) {
  return (
    <div className={"list-view-wrap"}>
      <ListMenu { ...{ directoryList } } />
      <div className={'list'}>
        {initListItem(noteList)}
      </div>
    </div>
  )
}

export default ListView;
