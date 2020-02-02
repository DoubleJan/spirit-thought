import request from './../../server';

// 请求笔记目录
export async function getNoteDirectory(params?: any) {
  return request({
    url: '/note/directory',
    params,
    method: 'GET'
  });
}

// 请求笔记列表
export async function getNoteList(params?: any) {
  return request({
    url: '/note/list',
    params,
    method: 'GET'
  });
}


