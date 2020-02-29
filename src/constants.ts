// 定义环境常量
// localstorage存储键名
const storage = {
  username: 'USERNAME',
  password: 'PASSWORD',
  email: 'EMAIL'
}


// 根据环境选择不同的公共值
const Constants = {
  development: {
    baseURL: 'http://localhost:3000',
    storage,
    // baseURL: 'http://spirithought.net'
  },
  production: {
    baseURL: 'http://spirithought.net',
    storage
  },
  test: {
    baseURL: 'http://localhost:9000',
    storage
  }
}


export default Constants[process.env.NODE_ENV];