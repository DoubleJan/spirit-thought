// 登录页面
import React, { useState } from 'react';
import md5 from 'md5';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import Message from '@/components/message/Message';
import { MESSAGE_TYPE, MessageProps } from '@/components/message/index.d';
import { LoginType, Title, Input, LoginComponent, LicenceType } from './login.d';
import * as LoginServ from './loginServ';
import Constants from '@/constants';
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
  confirmPassword: '确认密码',
  identify: '用户名 / 邮箱',
  licence: '注册许可号'
}

// 发送登录，注册，重置密码请求
async function postLogin(values: LoginComponent, type: LoginType, setMessageProps: (msg: MessageProps) => void, 
  setIsShowMsg: (show: boolean) => void, history: History) {
  const res = await LoginServ.postLogin({ ...values, type }) as Response;
  
  if (res.code === '000000' && res.data) {
    setMessageProps({ message: `${title[type]}成功`, type: MESSAGE_TYPE.SUCCESS });
    setIsShowMsg(true);

    // 登录或注册成功后存储信息
    localStorage.setItem(Constants.storage.username, res.data.username);
    localStorage.setItem(Constants.storage.password, res.data.password);
    localStorage.setItem(Constants.storage.email, res.data.email);

    // 跳转到首页
    history.push('/');

  } else {
    console.log('res: ', res)
    setMessageProps({ message: res.msg || `未知的消息请求失败`, type: MESSAGE_TYPE.ERROR });
    setIsShowMsg(true);
  }
}

// 发送获取许可号的请求
async function getLicence(values: LicenceType,
  setMessageProps: (msg: MessageProps) => void, setIsShowMsg: (show: boolean) => void) {
  const res = await LoginServ.getLience(values) as Response;
  if (res.code === '000000') {
    setMessageProps({ message: '申请成功，请及时查看邮箱', type: MESSAGE_TYPE.SUCCESS });
    setIsShowMsg(true);
  } else {
    setMessageProps({ message: res.msg || `未知的消息请求失败`, type: MESSAGE_TYPE.ERROR });
    setIsShowMsg(true);
  }
}



// 查询dom，获取form数据
function getFormValues(): LoginComponent | null {
  const loginForm = document.querySelector('#loginForm');
  let elements: NodeListOf<Input>;

  if (loginForm != null) {
    elements = loginForm.querySelectorAll('input') as NodeListOf<Input>;

    const values: LoginComponent = Object.keys(elements).reduce((acc: any, cur: any) => {
      if (elements[cur] && elements[cur].name)
        acc[elements[cur].name] = elements[cur].value
      return acc;
    }, {});

    return values;
  }

  return null;
}

// 提交表单
function submitLogin(type: LoginType, setMessageProps: (msg: MessageProps) => void, 
  setIsShowMsg: (show: boolean) => void, history: History) {

  const values = getFormValues();
  if (values != null) {

    // 如果是注册或重置密码，需要检查两次密码是否一致
    if (checkFillValue(values, setMessageProps, setIsShowMsg)) {

      if (type !== 'login') {

        // 校验邮箱格式
        if (!isEmailValid(values.email)) {
          setMessageProps({ message: '邮箱格式错误', type: MESSAGE_TYPE.ERROR });
          setIsShowMsg(true);
          return;
        }

        // 不能使用特殊符号
        if (!isUsernameValid(values.username)) {
          setMessageProps({ message: '用户名仅支持中文，英文，数字，下划线，连字符', type: MESSAGE_TYPE.ERROR });
          setIsShowMsg(true);
          return;
        }

        // 校验密码长度
        if (values.password.length < 6 || values.password.length > 20) {
          setMessageProps({ message: '密码长度应在6到20位字符之间', type: MESSAGE_TYPE.ERROR });
          setIsShowMsg(true);
          return;
        }

        // 如果不是登录，就要检查两次密码是否输入正确
        if (values.password !== values.confirmPassword) {
          setMessageProps({ message: '两次密码不一致', type: MESSAGE_TYPE.ERROR });
          setIsShowMsg(true);
          return;
        }
      }

      // 发送加密后的请求对象
      postLogin(encryptLogin(values), type, setMessageProps, setIsShowMsg, history);
    }
  }
}

// 检查是否有项没有填写完毕
function checkFillValue(values: any, setMessageProps: (msg: MessageProps) => void, setIsShowMsg: (show: boolean) => void): boolean {
  const key = Object.keys(values).find((key: string) => !values[key] || values[key] === '');
  if (key != null) {
    setIsShowMsg(true);
    setMessageProps({ message: `请填写${checkMap[key]}`, type: MESSAGE_TYPE.WARN });
    return false;
  }
  return true;
}

// 校验邮箱
function isEmailValid(email: string): boolean {
  return email.search(/^\S+@\S{2,7}\.com$/) !== -1
}

// 校验用户名
function isUsernameValid(username: string): boolean {
  return username.search(/[&,%,#,$,@,*,^,~,/,(,),（,）,，,+,-,=,<,>,!,！]+/) === -1
}

// 加密
function encryptLogin(values: LoginComponent) {
  values.password = md5(values.password);
  delete values.confirmPassword;
  return values;
}

// 申请许可
function requestLience(setMessageProps: (msg: MessageProps) => void, setIsShowMsg: (show: boolean) => void) {
  const values = getFormValues();

  if (values != null) {
    if (isEmailValid(values.email) && isUsernameValid(values.username)) {
      getLicence({ email: values.email, username: values.username }, setMessageProps, setIsShowMsg);
    } else {
      setMessageProps({ message: '请填写正确的邮箱和用户名', type: MESSAGE_TYPE.WARN });
      setIsShowMsg(true);
    }
  }
}

// 切换表单时清空数据
function toggleForm(setType: Function, type: string) {
  const loginForm = document.querySelector('#loginForm');
  let elements: NodeListOf<Input>;

  if (loginForm != null) {
    elements = loginForm.querySelectorAll('input') as NodeListOf<Input>;
    Object.keys(elements).forEach((cur: any) =>  elements[cur].value = '');
  }

  setType(type);
}




function Login({ type = 'login' }: { type: LoginType }) {

  const history = useHistory();
  const [loginType, setType] = useState(type);
  const [isShowMsg, setIsShowMsg] = useState(false);
  const [messageProps, setMessageProps] = useState({ type: MESSAGE_TYPE.SUCCESS, message: '' });
  
  return (
    <div className={'login-wrapper'}>
      <Message {...messageProps} show={isShowMsg} setShow={setIsShowMsg} />
      <div className={'login-outer'}>

        <p className={'login-title'}>{title[loginType]}</p>
        <div className={'login-inner'} id={'loginForm'}>

          {
            loginType !== "login" &&
            <div className={'login-input'}>
              <input type="text" placeholder={"邮箱"} name="email" />
            </div>
          }
          {
            loginType !== "login" ?
              <>
                <div className={'login-input'}>
                  <input type="text" placeholder={"用户名"} name="username" />
                </div>
              </>
              :
              <div className={'login-input'}>
                <input type="text" placeholder={"用户名 / 邮箱"} name="identify" />
              </div>
          }
          {
            loginType === 'register' &&
            <>
              {/* <div className={'login-input'}>
                <input type="text" placeholder={"许可备注"} name="remark" />
              </div> */}
              <div className={'login-input licence-wrap'}>
                <input type="text" placeholder={"注册许可号"} name="licence" />
                <button onClick={() => requestLience(setMessageProps, setIsShowMsg)}>申请许可</button>
              </div>
            </>
          }
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
            onClick={() => submitLogin(loginType, setMessageProps, setIsShowMsg, history)}
            className={'login-button'}
          >
            {title[loginType]}
          </button>

          <div className={"remarks"}>
            <span onClick={() => toggleForm(setType, 'register')}>
              <img className={"smaller"} src="/assets/login/reg.svg" alt="注册" />
              新用户
            </span>
            <span onClick={() => toggleForm(setType, 'resetPwd')}>
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
