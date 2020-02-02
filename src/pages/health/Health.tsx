// 健康模块
// 影子科技健康日报
import React, { useState } from 'react';
// import Message from './../../components/message/message';
// import { MESSAGE_TYPE } from './../../components/message';
import moment from 'moment';
import './health.less';

// import * as dd from 'dingtalk-jsapi';
// import { IRuntimePermissionRequestAuthCodeParams } from 'dingtalk-jsapi/api/apiObj'

// 企业id
// const CORPID = 'ding4251f83bbbbbf638a1320dcb25e91351';

// 表单字段对照表
// label中文 value值 isSwitch是否是布尔组件

const HealthForm: HealthFormType = {
  'name': { label: '姓名' },
  'department': { label: '部门', isSwitch: false },
  'address': { label: '住址', isSwitch: false },
  'bodyStatus': { label: '身体状况', isSwitch: true },
  'bodyExp': { label: '身体异常', isSwitch: false },
  'touchStatus': { label: '主要接触人情况', isSwitch: true },
  'touchExp': { label: '主要接触人身体异常情况', isSwitch: false },
  'inHome': { label: '是否宅家', isSwitch: true },
  'isMask': { label: '是否佩戴口罩', isSwitch: true },
  'activityInfo': { label: '外出活动范围与事项', isSwitch: false }
}

interface Field {
  label: string;
  isSwitch?: boolean;
}

interface HealthFormType {
  [props: string]: Field
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


function postHealth() {

  const form = document.querySelector('#form');

  let elements: NodeListOf<Input>;
  if (form != null) {

    elements = form.querySelectorAll('.input') as NodeListOf<Input>;

    const values = Object.keys(elements).reduce((acc: any, cur: any) => {
      if (elements[cur] && elements[cur].name)
        acc[elements[cur].name] = elements[cur].value
      return acc;
    }, {});

    const notValid = Object.keys(HealthForm).some((key: string) => {
      if (values[key] == null || values[key] === '') {
        const message = `请${
          HealthForm[key].isSwitch ? '选择' : '填写'
        }${
          HealthForm[key].label
        }${
          HealthForm[key].isSwitch ? '': '信息'
        }`;
        console.log('message: ', message);
        return true;
      }
      return false;
    });

    // 如果有数据缺失
    if (notValid) {
      console.log('values: ', values);
    } else {
      // 如果数据正常，发送请求
    }
    
  }

}


function Health() {

  // 身体状况
  const [bodyStatus, setBodyStatus] = useState(-1);

  // 主要接触人身体状况
  const [touchStatus, setTouchStatus] = useState(-1);

  // 是否在家
  const [inhomeStatus, setInhomeStatus] = useState(-1);

  // 是否佩戴口罩
  const [maskStatus, setMaskStatus] = useState(-1);

  // 打印消息
  // const [isMessage, printMessage] = useState(false);
  // const [message, setMessage] = useState('');
  // const [messageType, setMessageType]: [MESSAGE_TYPE, Function] = useState(0)


  return (
    <div className={"health-outer-wrap"}>
      <div className={'health-wrap'}>
        <h1>影子科技员工健康日报</h1>
        <p className={'now-time'}>{moment().format('YYYY-MM-DD HH:mm')}</p>
        {/* { isMessage && <Message message={message} type={messageType}/> } */}
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
                inhomeStatus === 1 ? 'to-true' : inhomeStatus === 0 ? 'to-false' : ''
                }`}
              onClick={() => changeStatus(inhomeStatus, setInhomeStatus, 1)}
            >
              <span>是</span>
            </div>
            <div
              className={`boolean-switch switch-false ${
                inhomeStatus === 0 ? 'to-true' : inhomeStatus === 1 ? 'to-false' : ''
                }`}
              onClick={() => changeStatus(inhomeStatus, setInhomeStatus, 0)}
            >
              <span>否</span>
            </div>
          </div>

          {
            inhomeStatus === 0 &&
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
                    maskStatus === 1 ? 'to-true' : maskStatus === 0 ? 'to-false' : ''
                    }`}
                  onClick={() => changeStatus(maskStatus, setMaskStatus, 1)}
                >
                  <span>是</span>
                </div>
                <div
                  className={`boolean-switch switch-false ${
                    maskStatus === 0 ? 'to-true' : maskStatus === 1 ? 'to-false' : ''
                    }`}
                  onClick={() => changeStatus(maskStatus, setMaskStatus, 0)}
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

          <button type={'submit'} onClick={() => postHealth()}>提交</button>
        </div>
      </div>
    </div>
  )
}

export default Health;
