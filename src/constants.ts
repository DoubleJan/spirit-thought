// 定义环境常量

// 根据环境选择不同的公共值
const Constants = {
  development: {
    baseURL: 'http://localhost:9000'
  },
  production: {
    baseURL: 'http://116.62.44.86:9000'
  },
  test: {
    baseURL: 'http://localhost:9000'
  }
}


export default Constants[process.env.NODE_ENV];