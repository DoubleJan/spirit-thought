// 设置区块代码的高亮样式
import React, { useEffect } from 'react';
import { PrismLight as SyntaxHightlighter } from "react-syntax-highlighter";
// 设置高亮样式
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
// 设置支持的语言
import syntaxLang from './syntaxLang';
import { CodeProps } from './index.d';

function CodeBlock(config: CodeProps) {
  
  // 注册高亮语言
  useEffect(() => {
    Object.keys(syntaxLang).forEach((key) => {
      SyntaxHightlighter.registerLanguage(key, syntaxLang[key]);
    });
  }, []);

  return (
    <figure>
      <SyntaxHightlighter language={config.language} style={coy}>
        {config.value}
      </SyntaxHightlighter>
    </figure>
  )
}

export default CodeBlock;