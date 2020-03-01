// 全局信息提示框
import React from 'react';
import { MESSAGE_TYPE } from '.';
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
        <div className={'msg-body'}>
           <img className={'message-icon'} src={`/assets/icons/${type.toLowerCase()}.svg`} alt=""/>
           <span>{message}</span>
        </div>
      </div>
    ) : null
  )

}

export default Message;