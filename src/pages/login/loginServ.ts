import request from './../../server';

// 请求笔记目录
export async function postLogin(params?: any) {
  return request({
    url: `/api/auth/${params.type}`,
    data: { ...params, type: undefined },
    method: 'POST'
  });
}

// 获取注册许可号
export async function getLience(params: any) {
  return request({
    url: `/api/auth/licence?type=requestLicence`,
    data: params,
    method: 'GET'
  })
}