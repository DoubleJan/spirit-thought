import request from './../../server';

// 请求笔记目录
export async function postHealth(params?: any) {
  return request({
    url: '/api/health/postHealth',
    data: params,
    method: 'POST'
  });
}



