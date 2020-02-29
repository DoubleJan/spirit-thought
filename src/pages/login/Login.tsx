// 登录页面
import React, { useState } from 'react';
import md5 from 'md5';
import Message from '@/components/message/Message';
import { MESSAGE_TYPE } from '@/components/message/index.d';
import { LoginType, Title, Input, LoginComponent } from './login.d';
import * as LoginServ from './loginServ';
import './login.less';

const title: Title = {
  login: '登录',
  register: '注册',
  resetPwd: '找回密码'
}

// 用于警告提示的对象
const checkMap: LoginComponent = {
  email: '邮箱',
  username: '用户名',
  password: '密码',
  confirmPassword: '确认密码'
}

// 发送请求
async function postLogin(values: LoginComponent, type: LoginType) {
  const res = LoginServ.postLogin({ ...values, type });

}

// 提交表单
function submitLogin(type: LoginType, setMessage: (msg: string) => void, setIsShowMsg: (show: boolean) => void) {
  const loginForm = document.querySelector('#loginForm');
  let elements: NodeListOf<Input>;

  if (loginForm != null) {
    elements = loginForm.querySelectorAll('input') as NodeListOf<Input>;

    const values: LoginComponent = Object.keys(elements).reduce((acc: any, cur: any) => {
      if (elements[cur] && elements[cur].name)
        acc[elements[cur].name] = elements[cur].value
      return acc;
    }, {});


    // 如果是注册或重置密码，需要检查两次密码是否一致
    if (checkFillValue(values, setMessage, setIsShowMsg)) {

      if (type !== 'login') {

        // 校验邮箱格式
        if(values.email.search(/^\S+@\S{2,7}\.com$/) === -1) {
          setMessage('邮箱格式错误');
          setIsShowMsg(true);
          return;
        }

        // 校验密码长度
        if (values.password.length < 6 || values.password.length > 20) {
          setMessage('密码长度应在6到20位字符之间');
          setIsShowMsg(true);
          return;
        }

        // 如果不是登录，就要检查两次密码是否输入正确
        if (values.password !== values.confirmPassword) {
          setMessage('两次密码不一致');
          setIsShowMsg(true);
          return;
        }

      }

      // 不能使用特殊符号
      if (values.username.search(/[&,%,#,$,@,*,^,~,/,(,),（,）,，,+,-,=,<,>,!,！]+/) !== -1) {
        setMessage('用户名仅支持中文，英文，数字，下划线，连字符');
        setIsShowMsg(true);
        return;
      }

      // 发送加密后的请求对象
      postLogin(encryptLogin(values), type);
    }
  }
}

// 检查是否有项没有填写完毕
function checkFillValue(values: any, setMessage: (msg: string) => void, setIsShowMsg: (show: boolean) => void): boolean {
  const key = Object.keys(values).find((key: string) => !values[key] || values[key] === '');
  if (key != null) {
    setIsShowMsg(true);
    setMessage(`请填写${checkMap[key]}`);
    return false;
  }
  return true;
}

// 加密
function encryptLogin(values: LoginComponent) {
  values.password = md5(values.password);
  delete values.confirmPassword;
  console.log('md5', values);
  return values;
} 




function Login({ type = 'login' }: { type: LoginType }) {

  const [loginType, setType] = useState(type);
  const [isShowMsg, setIsShowMsg] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className={'login-wrapper'}>
      <Message
        show={isShowMsg}
        message={message}
        type={MESSAGE_TYPE.ERROR}
        setShow={setIsShowMsg}
      />
      <div className={'login-outer'}>

        <p className={'login-title'}>{title[loginType]}</p>
        <div className={'login-inner'} id={'loginForm'}>

          {
            loginType !== "login" &&
            <div className={'login-input'}>
              <input type="text" placeholder={"邮箱"} name="email" />
            </div>
          }
          <div className={'login-input'}>
            <input type="text" placeholder={"用户名"} name="username" />
          </div>
          <div className={'login-input'}>
            <input type="password" placeholder={"密码"} name="password" />
          </div>

          {
            loginType !== 'login' &&
            <div className={'login-input'}>
              <input type="password" placeholder={"确认密码"} name="confirmPassword" />
            </div>
          }

          <button
            onClick={() => submitLogin(loginType, setMessage, setIsShowMsg)}
            className={'login-button'}
          >
            {title[loginType]}
          </button>

          <div className={"remarks"}>
            <span onClick={() => setType('register')}>
              <img className={"smaller"} src="/assets/login/reg.svg" alt="注册" />
              新用户
            </span>
            <span onClick={() => setType('resetPwd')}>
              <img className={"lagger"} src="/assets/login/reset.svg" alt="重置密码" />
              忘记密码
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}


export default Login;
