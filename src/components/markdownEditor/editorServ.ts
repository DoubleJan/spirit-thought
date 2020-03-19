import request from './../../server';

// 请求笔记目录
export async function getNoteDirectory(params?: any) {
  return request({
    url: `/api/${params.type}/directory`,
    data: params,
    method: 'GET'
  });
}

// 新增文章
export async function addContent(params?: any) {
  return request({
    url: `/api/content/${params.type}/addContent`,
    data: params,
    method: 'POST'
  });
}