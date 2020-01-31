// 全局footer
import React, { useState } from 'react';
import moment from 'moment';
import './footer.less';

function Footer() {
  const [isActive, setInformActive] = useState(false);

  return (
    <footer className={'footer-wrap'}>
      <div className={'author-inform'} onMouseOver={() => {setInformActive(true)}}>
        <img src="/assets/img/email.svg" alt=""/>
        <span className={"inform-title"}>EMAIL</span>
        <span className={`inform-detail ${isActive ? 'inform-active' : ''}`}>doublejan@126.com</span>
        <img src="/assets/img/github.svg" alt=""/>
        <span className={"inform-title"}>GITHUB</span>
        <span className={`inform-detail ${isActive ? 'inform-active' : ''}`}>DoubleJan</span>
      </div>
      <div className={"copyright"}>
        {`Copyright © 2020 - ${moment().year()} Spirit Thought. All Rights Reserved`}
      </div>
    </footer>
  )
}

export default Footer;