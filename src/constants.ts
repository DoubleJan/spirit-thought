// 定义环境常量

// 根据环境选择不同的公共值
const Constants = {
  development: {
    baseURL: 'http://localhost:3000',
    // baseURL: 'http://spirithought.net'
  },
  production: {
    baseURL: 'http://spirithought.net'
  },
  test: {
    baseURL: 'http://localhost:9000'
  }
}


export default Constants[process.env.NODE_ENV];