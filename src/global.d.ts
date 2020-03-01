// 给div等html元素提供扩展的类型定义

// declare module 'react' {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     name?: string;
//     spinning?: boolean;
//   }
// }

interface Response extends Promise<any> {
  code: string;
  msg: string;
  data?: any
}