// 导入所有需要用到的高亮语言，由于@types文件中，react-syntax-highlighter模块定义的限制，必须一个个import导入

import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import less from 'react-syntax-highlighter/dist/esm/languages/prism/less';
import sass from 'react-syntax-highlighter/dist/esm/languages/prism/sass';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';

import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import c from 'react-syntax-highlighter/dist/esm/languages/prism/c';
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp';
import csharp from 'react-syntax-highlighter/dist/esm/languages/prism/csharp';
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
import php from 'react-syntax-highlighter/dist/esm/languages/prism/php';
import django from 'react-syntax-highlighter/dist/esm/languages/prism/django';
import go from 'react-syntax-highlighter/dist/esm/languages/prism/go';
import kotlin from 'react-syntax-highlighter/dist/esm/languages/prism/kotlin';
import dart from 'react-syntax-highlighter/dist/esm/languages/prism/dart';
import objectivec from 'react-syntax-highlighter/dist/esm/languages/prism/objectivec';
import swift from 'react-syntax-highlighter/dist/esm/languages/prism/swift';

import vim from 'react-syntax-highlighter/dist/esm/languages/prism/vim';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import git from 'react-syntax-highlighter/dist/esm/languages/prism/git';
import http from 'react-syntax-highlighter/dist/esm/languages/prism/http';
import nginx from 'react-syntax-highlighter/dist/esm/languages/prism/nginx';
import ruby from 'react-syntax-highlighter/dist/esm/languages/prism/ruby';

import sql from 'react-syntax-highlighter/dist/esm/languages/prism/sql';
import stylus from 'react-syntax-highlighter/dist/esm/languages/prism/stylus';
import wiki from 'react-syntax-highlighter/dist/esm/languages/prism/wiki';
import scheme from 'react-syntax-highlighter/dist/esm/languages/prism/scheme';
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';
import matlab from 'react-syntax-highlighter/dist/esm/languages/prism/matlab';
import lisp from 'react-syntax-highlighter/dist/esm/languages/prism/lisp';

import { SyntaxLang } from './index.d';

const syntaxLang: SyntaxLang = {
  // 前端语言
  jsx, javascript, typescript, tsx, css, less, sass, scss, json,
  // 后端语言
  python, java, c, cpp, csharp, django, go, php,
  // app语言
  swift, objectivec, dart, kotlin,
  // 服务器
  vim, bash, git, http, nginx, ruby, sql, 
  // 其他
  stylus, wiki, scheme, markdown, matlab, lisp
}

export default syntaxLang;