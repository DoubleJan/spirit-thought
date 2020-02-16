import axios, { Method } from 'axios';
import Constants from './constants';

// 一个axios实例
const server = axios.create({
  baseURL: Constants.baseURL,
  headers: {
    'Cache-Control': 'max-age=0'
  }
});

// 数据请求
function request({ url, params, headers, method }: 
    { url: string, params?: any, headers?: any, method: Method }) {

  const m = method.toLowerCase() as Method;
  let p;
  if (m === 'get' || m === 'patch') {
    p = params;
  }

  return server({ 
    url, 
    params: p, 
    data: params, 
    method: m, 
    headers
  }).then((res) => res.data);
}


export default request;