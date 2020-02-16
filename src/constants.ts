// 定义环境常量

// 根据环境选择不同的公共值
const Constants = {
  development: {
    baseURL: 'http://localhost:9000/api'
  },
  production: {
    baseURL: 'http://spirithought.net/api'
  },
  test: {
    baseURL: 'http://localhost:9000/api'
  }
}


export default Constants[process.env.NODE_ENV];