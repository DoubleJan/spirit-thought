// 用于note，article，code页面的list组件主体

import React from 'react';
import ListItem from './ListItem';
import ListMenu from './ListMenu';

import './styles.less';

function initListItem () {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(<ListItem key={i} />);
  }
  return arr;
}

function ListView() {
  return (
    <div className={"list-view-wrap"}>
      <ListMenu />
      <div className={'list'}>
        {initListItem()}
      </div>
    </div>
  )
}

export default ListView;
