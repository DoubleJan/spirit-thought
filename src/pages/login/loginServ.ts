import request from './../../server';

// 请求笔记目录
export async function postLogin(params?: any) {
  return request({
    url: `/api/auth/${params.type}`,
    data: { ...params, type: undefined },
    method: 'POST'
  });
}