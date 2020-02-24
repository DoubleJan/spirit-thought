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
function request({ url, data, headers, method }: 
    { url: string, data?: any, headers?: any, method: Method }) {

  const m = method.toLowerCase() as Method;
  
  let params;
  if (m === 'get' || m === 'patch') {
    params = data;
  }

  return server({ 
    url, 
    data,
    params,
    method: m, 
    headers
  }).then((res) => res.data);
}


export default request;