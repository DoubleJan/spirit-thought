// list组件使用的菜单，用于显示博文目录
import React, { useState } from 'react';

const menus = [
  { menuName: '第1个文章集合' },
  { menuName: '第22个文章集合' },
  { menuName: '第4个文章集合' },
  { menuName: '第9个文章集合' },
  { menuName: '第123个文章集合' },
  { menuName: '第个文章集合' },
]


function Menu() {

  const [activeStatus, setActiveStatus] = useState(-1);

  return (
    <div className={"list-menu-wrap"}>
      {
        menus.map((item, index) => (
          <div 
            className={`menu-item ${activeStatus === index ? 'actived-menu' : ''}`} 
            key={index}
            onMouseOver={() => setActiveStatus(index)}
            onMouseOut={() => setActiveStatus(-1)}
          >
            {item.menuName}
          </div>
        ))
      }
    </div>
  )
}

export default Menu;
