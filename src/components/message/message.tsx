// 全局信息提示框
import React from 'react';
import { MESSAGE_TYPE } from './index.d';
import './message.less';

// 接收message
function Message ({ message, type, show, setShow }: 
  { message: string, type: MESSAGE_TYPE, show: boolean, setShow: Function }) {
  // 控制台输出错误信息
  ;
  return (
    show ? (
      <div 
        className={`message-wrap`} 
        onAnimationEnd={() => setShow(false)}
        onAnimationStart={() => console.warn(`${type}: ${message}`)}
      >
        <p>{message}</p>
      </div>
    ) : null
  )

}

export default Message;