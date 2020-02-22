// list组件使用的菜单，用于显示博文目录
import React, { useState } from 'react';
import { DirectoryList } from './index';


function Menu({ directoryList }: { directoryList: DirectoryList }) {

  return (
    <div className={"list-menu-wrap"}>
      {
        Array.isArray(directoryList) && directoryList.map((item, index) => (
          <div
            className={`menu-item`}
            key={index}
          >
            {item.name}
          </div>
        ))
      }
    </div>
  )
}

export default Menu;
