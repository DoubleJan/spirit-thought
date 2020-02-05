import axios from 'axios';
import { Method } from 'axios';


// 一个axios实例
const server = axios.create({
  baseURL: 'http://localhost:9000'
});

// 数据请求
function request({ url, params, headers, method }: 
    { url: string, params?: any, headers?: any, method: Method }) {

  const m = method.toLowerCase() as Method;
  let p;
  if (m === 'get' || m === 'patch') {
    p = params;
  }

  return server({ url, params: p, data: params, method: m }).then((res) => res.data);
}


export default request;