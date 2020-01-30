// 头部header
import React from 'react';
import './header.less';

function Header() {
  return (
    <header className={'header-wrap'}>
      <div className={'header-title-wrap'}>
        {/* <p className={"header-title"}>SPIRIT THOUGHT</p> */}
        <img src="/assets/img/fire-active.svg" alt=""/>
        <p className={"header-title"}>灵思</p>
      </div>
      <div className={"header-nav-wrap"}>
        <div className={"nav-item"}><span className={"nav-item-span"}>HOME</span></div>
        <div className={"nav-item"}><span className={"nav-item-span"}>NOTE</span></div>
        <div className={"nav-item"}><span className={"nav-item-span"}>ARTICLE</span></div>
        <div className={"nav-item"}><span className={"nav-item-span"}>HEALTH</span></div>
        <div className={"nav-item"}><span className={"nav-item-span"}>ADMIN</span></div>
      </div>
      {/* <div className={"header-nav-wrap"}>
        <div className={"nav-item"}><span className={"nav-item-span"}>首页</span></div>
        <div className={"nav-item"}><span className={"nav-item-span"}>笔记</span></div>
        <div className={"nav-item"}><span className={"nav-item-span"}>博文</span></div>
        <div className={"nav-item"}><span className={"nav-item-span"}>安全</span></div>
        <div className={"nav-item"}><span className={"nav-item-span"}>管理</span></div>
      </div> */}
    </header>
  )
}

export default Header;