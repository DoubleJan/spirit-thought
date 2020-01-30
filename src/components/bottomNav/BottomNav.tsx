// 移动端时，显示为底部导航栏
import React from 'react'
import './bottomNav.less';

function BottomNav() {
  return (
    <div className={'bottom-nav-wrap'}>
      <span className={"bottom-nav-item"}>动态</span>
      <span className={"bottom-nav-item"}>笔记</span>
      <span className={"bottom-nav-item"}>文章</span>
      <span className={"bottom-nav-item"}>我的</span>
    </div>
  )
}

export default BottomNav;


