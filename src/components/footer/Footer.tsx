// 全局footer
import React from 'react';
import './footer.less';

function Footer() {
  return (
    <footer className={'footer-wrap'}>
      <div className={'author-inform'}>
        <span>EMAIL</span>
        <span>GITHUB</span>
      </div>
      <div className={"copyright"}>Copyright © 2020 - 2020 Spirit Thought. All Rights Reserved</div>
    </footer>
  )
}

export default Footer;