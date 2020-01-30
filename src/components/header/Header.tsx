// 头部header
import React from 'react';
import './header.less';

function Header() {
  return (
    <header className={'header-wrap'}>
      <div className={'header-title-wrap'}>
        <p className={"header-title"}>灵思</p>
      </div>
      <div className={"header-nav-wrap"}>
        <span className={"nav-item"}>首页</span>
        <span className={"nav-item"}>笔记</span>
        <span className={"nav-item"}>文章</span>
        <span className={"nav-item"}>健康</span>
        <span className={"nav-item"}>管理</span>
      </div>
    </header>
  )
}

export default Header;