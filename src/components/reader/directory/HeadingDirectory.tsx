// 根据标题生成左侧的目录

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Location } from 'history'
import { DirectoryContent, DirectoryList, HeadingLevel } from '../index.d';
import '../styles/reader.less';

// 点击左侧标题切换到对应的哈希路径，定位到文章的特定位置
function toggleHashRoute(hash: string, location: Location) {
  // 拿到对应的a链接，触发点击事件
  const h = document.getElementById(`${hash}`) as HTMLElement;
  const a = h && h.querySelector('a');
  console.log('location: ', location);
  a && a.click();
}

function HeadingDirectory(props: DirectoryContent) {
  const { content } = props;
  const contentArray = content.split('\n');
  const dir: DirectoryList = [];
  const location = useLocation();

  contentArray.forEach((content, index, arr) => {
    if (!arr[index - 1] || !arr[index + 1] || arr[index - 1] === arr[index + 1]) {
      const title = content.match(/(?<=^(#+)\s).+/g);
      const level = content.match(/#+\s/g);
      if (title != null && level != null) {
        // match返回的是一个字符串数组，并且最后一个字符是空格，因此level应该减一
        dir.push({ title: title[0], level: `h${level[0].split('').length - 1}` as HeadingLevel });
      }
    }
  });

  return (
    <div className={'reader-directory-wrapper'}>
      {
        dir.map((dir, index) => (
          <p 
            key={index} 
            className={`${dir.level}-level levels-directory`}
            onClick={() => toggleHashRoute(dir.title, location)}
          >
            {dir.title}
          </p>
        ))
      }
    </div>
  )
}

export default HeadingDirectory;
