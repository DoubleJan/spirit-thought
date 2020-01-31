// list组件中，每一个item的内容

import React from 'react';
import moment from 'moment';

import './styles.less';

// item包括
// 文件夹图片 ：文章标题
// 我文章简述
// 作者，文件夹，分类标签，发布时间
function ListItem() {
  return (
    <div className={'list-item-wrap'}>
      <div className={"item-title"}>
        <div className={"item-img-wrap"}><img src="/assets/img/logo.svg" alt="" /></div>
        <p>ITEM-TITLE-CONTEXT</p>
      </div>
      <div className={'item-desc'}>
        先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。
        然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。
        诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
      </div>
      <div className={'other-detail'}>
        <span>{`发布在${'JavaScript随笔'}`}</span>
        <span>{`写于 ${moment().format('YYYY-MM-DD HH:mm:ss')}`}</span>
      </div>
    </div>
  )
}

export default ListItem;
