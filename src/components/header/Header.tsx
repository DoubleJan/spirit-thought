// 头部header
import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import './header.less';


function Header() {
  const history = useHistory();
  const location = useLocation();

  return (
    <header className={'header-wrap'}>
      <div className={'header-title-wrap'} onClick={() => history.push('/')}>
        <img src="/assets/img/fire-active.svg" alt="" />
        <p className={"header-title"}>灵思</p>
      </div>

      <div className={"header-nav-wrap"}>
        <div className={"nav-item"}>
          <span
            className={`nav-item-span ${location.pathname.includes('/note') ? 'actived-nav-span' : ''}`}
            onClick={() => history.push('/note')}
          >NOTE</span>
        </div>
        <div className={"nav-item"}>
          <span
            className={`nav-item-span ${location.pathname.includes('/article') ? 'actived-nav-span' : ''}`}
            onClick={() => history.push('/article')}
          >ARTICLE</span>
        </div>
        <div className={"nav-item"}>
          <span
            className={`nav-item-span ${location.pathname.includes('/code') ? 'actived-nav-span' : ''}`}
            onClick={() => history.push('/code')}
          >CODE</span>
        </div>
        <div className={"nav-item"}>
          <span
            className={`nav-item-span ${location.pathname.includes('/books') ? 'actived-nav-span' : ''}`}
            onClick={() => history.push('/books')}
          >BOOKS</span>
        </div>
        <div className={"nav-item"}>
          <span
            className={`nav-item-span ${location.pathname.includes('/health') ? 'actived-nav-span' : ''}`}
            onClick={() => history.push('/health')}
          >HEALTH</span>
        </div>
        <div className={"nav-item none-admin"}>
          <span
            className={`nav-item-span ${location.pathname.includes('/admin') ? 'actived-nav-span' : ''}`}
            onClick={() => history.push('/admin')}
          >ADMIN</span>
        </div>
      </div>
    </header>
  )
}

export default Header;