// 用于note，article，code页面的list组件主体

import React from 'react';
import ListItem from './ListItem';
import ListMenu from './ListMenu';
import { DirectoryList, NoteList, RouterPath } from './index';

import './styles.less';

function initListItem (noteList: NoteList, routerPath: RouterPath) {
  if (Array.isArray(noteList)) {
    return noteList.map((item, i) => <ListItem key={i} note={item} routerPath={routerPath} />)
  }
  return null;
}

function ListView({ directoryList, noteList, routerPath }: 
  { directoryList: DirectoryList, noteList: NoteList, routerPath: RouterPath }) {
  return (
    <div className={"list-view-wrap"}>
      <ListMenu { ...{ directoryList } } />
      <div className={'list'}>
        {initListItem(noteList, routerPath)}
      </div>
    </div>
  )
}

export default ListView;
