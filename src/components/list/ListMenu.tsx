// list组件使用的菜单，用于显示博文目录
import React, { useState } from 'react';
import { DirectoryList } from './index';


function Menu({ directoryList }: { directoryList: DirectoryList }) {

  const [activeStatus, setActiveStatus] = useState(-1);

  return (
    <div className={"list-menu-wrap"}>
      {
        Array.isArray(directoryList) && directoryList.map((item, index) => (
          <div
            className={`menu-item ${activeStatus === index ? 'actived-menu' : ''}`}
            key={index}
            onMouseOver={() => setActiveStatus(index)}
            onMouseOut={() => setActiveStatus(-1)}
          >
            {item.name}
          </div>
        ))
      }
    </div>
  )
}

export default Menu;
