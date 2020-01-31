// 头部header
import React from 'react';
import { useHistory } from "react-router-dom";
import './header.less';

function Header() {
  const history = useHistory();

  return (
    <header className={'header-wrap'}>
      <div className={'header-title-wrap'} onClick={() => history.push('/')}>
        {/* <p className={"header-title"}>SPIRIT THOUGHT</p> */}
        <img src="/assets/img/fire-active.svg" alt="" />
        <p className={"header-title"}>灵思</p>
      </div>

      <div className={"header-nav-wrap"}>
        <div className={"nav-item"}>
          <span className={"nav-item-span"} onClick={() => history.push('/note')}>NOTE</span>
        </div>
        <div className={"nav-item"}>
          <span className={"nav-item-span"} onClick={() => history.push('/article')}>ARTICLE</span>
        </div>
        <div className={"nav-item"}>
          <span className={"nav-item-span"} onClick={() => history.push('/code')}>CODE</span>
        </div>
        <div className={"nav-item"}>
          <span className={"nav-item-span"} onClick={() => history.push('/books')}>BOOKS</span>
        </div>
        <div className={"nav-item"}>
          <span className={"nav-item-span"} onClick={() => history.push('/admin')}>ADMIN</span>
        </div>
      </div>
    </header>
  )
}

export default Header;