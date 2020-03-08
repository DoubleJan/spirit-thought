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

// react-markdown组件的heading传值类型
interface HeadingProps extends DirectoryFunction {
  level: string;
  children: Array<Child>;
  [props: string]: any
}

interface Child {
  props: { value: string };
  [p: string]: any;
}

interface SingleHeadingProps {
  level: string;
  id: string;
  child?: Child;
  [props: string]: any;
}

// 目录的类型定义
interface DirectoryType {
  level: HeadingLevel;
  title: string;
}

interface DirectoryFunction {
  pushDirectory: (dir: DirectoryType) => void;
  getDirectory: () => DirectoryList;
}

interface DirectoryContent {
  content: string;
}

type DirectoryList = Array<DirectoryType>;
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' |'h6';

// reader组件接收的参数类型
interface ReaderProps {
  content: string;
  isDirectory?: boolean;
  fixedHeight?: number;
  [props: string]: any;
}

export {
  CodeProps,
  SyntaxLang,
  HeadingProps,
  SingleHeadingProps,
  DirectoryList,
  DirectoryType,
  HeadingLevel,
  DirectoryFunction,
  DirectoryContent,
  ReaderProps
}