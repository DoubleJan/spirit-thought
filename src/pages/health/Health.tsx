// 健康模块
// 影子科技健康日报
import React, { useState } from 'react';
import Message from '../../components/message/Message';
import { MESSAGE_TYPE } from '../../components/message/index.d';
import moment from 'moment';
import * as healthServ from './healthServ';
import './health.less';

// import * as dd from 'dingtalk-jsapi';
// import { IRuntimePermissionRequestAuthCodeParams } from 'dingtalk-jsapi/api/apiObj'

// 企业id
// const CORPID = 'ding4251f83bbbbbf638a1320dcb25e91351';

// 表单字段对照表
// label中文 value值 isSwitch是否是布尔组件

const HealthForm: HealthFormType = {
  'name': { label: '姓名' },
  'department': { label: '部门' },
  'address': { label: '住址' },
  'bodyStatus': { label: '身体状况', isSwitch: true },
  'bodyExp': { label: '身体异常', need: 'bodyStatus' },
  'touchStatus': { label: '主要接触人情况', isSwitch: true },
  'touchExp': { label: '主要接触人身体异常情况', need: 'touchStatus' },
  'inHome': { label: '是否宅家', isSwitch: true },
  'isMask': { label: '是否佩戴口罩', isSwitch: true, need: 'inHome' },
  'activityInfo': { label: '外出活动范围与事项', need: 'inHome' }
}

interface Field {
  label: string;
  isSwitch?: boolean;
  need?: string;
}

interface HealthFormType {
  [props: string]: Field
}

interface HealthDetail {
  'name': string,
  'department': string,
  'address': string,
  'bodyStatus': boolean,
  'bodyExp'?: string,
  'touchStatus': boolean,
  'touchExp'?: string,
  'inHome': boolean,
  'isMask'?: boolean,
  'activityInfo'?: string
}

// 改变状态
function changeStatus(status: number, set: Function, defaultStatus: number) {
  if (status === -1) {
    set(defaultStatus);
  } else {
    set(1 - status);
  }
}

interface InputName {
  name: string
  [props: string]: any
}

type Input = Node & InputName & Element;

// 发送提交表单请求
async function postHealth(values: HealthDetail) {
  const res = await healthServ.postHealth(values);
  console.log(res);
}

// 提交方法
function submitHealth(status: any, setIsShowMsg: Function, setMessage: Function) {

  const form = document.querySelector('#form');

  let elements: NodeListOf<Input>;
  if (form != null) {

    elements = form.querySelectorAll('.input') as NodeListOf<Input>;

    const values = Object.keys(elements).reduce((acc: any, cur: any) => {
      if (elements[cur] && elements[cur].name)
        acc[elements[cur].name] = elements[cur].value
      return acc;
    }, {});

    // 检查四个布尔值是否是默认-1
    const notValidStatus = Object.keys(status).some((key: string) => {
      if ((key === 'isMask' && status.inHome === 1) || status[key] !== -1) {
        return false;
      } else {
        setIsShowMsg(true)
        setMessage(printError(key));
        return true;
      }
    })

    if (notValidStatus) {

      return;
    } else if (status.inHome === 1) {
      delete status.isMask;
    }

    // 检查非布尔值
    const notValid = Object.keys(values).some((key: string) => {
      if (values[key] == null || values[key] === '') {
        setIsShowMsg(true)
        setMessage(printError(key));
        setIsShowMsg(false);
        return true;
      }
      return false;
    });

    // 如果有数据缺失
    if (notValid) {
      console.log('values: ', { ...values, ...status, createDate: moment().format() });
      postHealth({ ...values, ...status, createDate: moment().format() });
    }

  }
}

// 输出错误信息
function printError(key: string) {
  const message = `请${
    HealthForm[key].isSwitch ? '选择' : '填写'
    }${
    HealthForm[key].label
    }${
    HealthForm[key].isSwitch ? '' : '信息'
    }`;
  return message;
}


function Health() {

  // 身体状况
  const [bodyStatus, setBodyStatus] = useState(-1);

  // 主要接触人身体状况
  const [touchStatus, setTouchStatus] = useState(-1);

  // 是否在家
  const [inHome, setInHome] = useState(-1);

  // 是否佩戴口罩
  const [isMask, setIsMask] = useState(-1);

  // 是否显示message
  const [isShowMsg, setIsShowMsg] = useState(false);

  // 显示msg的内容
  const [message, setMessage] = useState('');


  return (
    <div className={"health-outer-wrap"}>
      <div className={'health-wrap'}>
        <h1>影子科技员工健康日报</h1>
        <p className={'now-time'}>{moment().format('YYYY-MM-DD')}</p>
        <Message 
          show={isShowMsg} 
          message={message} 
          type={MESSAGE_TYPE.ERROR} 
          setShow={setIsShowMsg} 
        />
        <div className={'form'} id="form">
          <input className={'input'} name="name" type="text" placeholder="姓名" />
          <input className={'input'} name="department" type="text" placeholder="部门" />
          <input className={'input'} name="address" type="text" placeholder="住址（省-市-区）" />

          {/* 身体状况 */}
          <div className={'input boolean-wrap'}>
            <input
              className={"boolean-item"}
              style={{ background: 'none' }}
              type="text"
              placeholder="身体状况"
              name="bodyStatus"
              disabled
              required
            />
            <div
              className={`boolean-switch switch-true ${
                bodyStatus === 1 ? 'to-true' : bodyStatus === 0 ? 'to-false' : ''
                }`}
              onClick={() => changeStatus(bodyStatus, setBodyStatus, 1)}
            >
              <span>良好</span>
            </div>
            <div
              className={`boolean-switch switch-false ${
                bodyStatus === 0 ? 'to-true' : bodyStatus === 1 ? 'to-false' : ''
                }`}
              onClick={() => changeStatus(bodyStatus, setBodyStatus, 0)}
            >
              <span>欠佳</span>
            </div>
          </div>

          {
            bodyStatus === 0 &&
            <input className={'input'} name="bodyExp" type="text" placeholder="身体异常情况" />
          }


          {/* 接触人身体状况 */}
          <div className={'input boolean-wrap'}>
            <input
              className={"boolean-item"}
              style={{ background: 'none' }}
              type="text"
              placeholder="主要接触人情况"
              name="touchStatus"
              disabled
            />
            <div
              className={`boolean-switch switch-true ${
                touchStatus === 1 ? 'to-true' : touchStatus === 0 ? 'to-false' : ''
                }`}
              onClick={() => changeStatus(touchStatus, setTouchStatus, 1)}
            >
              <span>良好</span>
            </div>
            <div
              className={`boolean-switch switch-false ${
                touchStatus === 0 ? 'to-true' : touchStatus === 1 ? 'to-false' : ''
                }`}
              onClick={() => changeStatus(touchStatus, setTouchStatus, 0)}
            >
              <span>欠佳</span>
            </div>
          </div>

          {
            touchStatus === 0 &&
            <input className={'input'} name="touchExp" type="text" placeholder="主要接触人身体异常情况" />
          }


          {/* 是否宅家 */}
          <div className={'input boolean-wrap'}>
            <input
              className={"boolean-item"}
              style={{ background: 'none' }}
              type="text"
              placeholder="是否宅家"
              name="inHome"
              disabled
            />
            <div
              className={`boolean-switch switch-true ${
                inHome === 1 ? 'to-true' : inHome === 0 ? 'to-false' : ''
                }`}
              onClick={() => changeStatus(inHome, setInHome, 1)}
            >
              <span>是</span>
            </div>
            <div
              className={`boolean-switch switch-false ${
                inHome === 0 ? 'to-true' : inHome === 1 ? 'to-false' : ''
                }`}
              onClick={() => changeStatus(inHome, setInHome, 0)}
            >
              <span>否</span>
            </div>
          </div>

          {
            inHome === 0 &&
            <div>
              <div className={'input boolean-wrap'}>
                <input
                  className={"boolean-item"}
                  style={{ background: 'none' }}
                  type="text"
                  placeholder="是否佩戴口罩"
                  name="isMask"
                  disabled
                />
                <div
                  className={`boolean-switch switch-true ${
                    isMask === 1 ? 'to-true' : isMask === 0 ? 'to-false' : ''
                    }`}
                  onClick={() => changeStatus(isMask, setIsMask, 1)}
                >
                  <span>是</span>
                </div>
                <div
                  className={`boolean-switch switch-false ${
                    isMask === 0 ? 'to-true' : isMask === 1 ? 'to-false' : ''
                    }`}
                  onClick={() => changeStatus(isMask, setIsMask, 0)}
                >
                  <span>否</span>
                </div>
              </div>
              <textarea
                className={'input'}
                name="activityInfo"
                placeholder="外出活动范围与事项"
                maxLength={200}
              />
            </div>
          }

          <button
            type={'submit'}
            onClick={() =>
              submitHealth({ bodyStatus, touchStatus, inHome, isMask }, setIsShowMsg, setMessage)
            }
          >提交</button>
        </div>
      </div>
    </div>
  )
}

export default Health;
