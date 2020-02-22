// reader组件内部的类型声明

// react-markdown组件的code传值类型
interface CodeProps {
  language: string;
  value: string;
}

// 语法导入导出的对象的类型定义
interface SyntaxLang {
  [props: string]: any;
}

export {
  CodeProps,
  SyntaxLang
}