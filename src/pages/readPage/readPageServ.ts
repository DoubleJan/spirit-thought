// 阅读器页面的接口请求文件
import request from './../../server';

// 请求文章内容
export async function getContent(params?: any) {
  return request({
    url: `/files${params.type}s/${params.url}/md`,
    data: params,
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}