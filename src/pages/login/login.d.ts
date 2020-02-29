// login页面的类型定义

// 登录的标题映射对象
export interface Title {
  login: string;
  register: string;
  resetPwd: string;
}

// Login提交表单
export interface LoginComponent {
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
  [props: string]: string;
}

export type LoginType = 'login' | 'register' | 'resetPwd';

type Input = Node & InputName & Element;

