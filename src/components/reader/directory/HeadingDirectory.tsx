// 根据标题生成左侧的目录

import React from 'react';
import { DirectoryContent, DirectoryList, HeadingLevel } from '../index.d';
import '../styles/reader.less';

function HeadingDirectory(props: DirectoryContent) {
  const { content } = props;

  // useEffect(() => {
  //   const contentArray = content.split('\n');
  //   const dir: DirectoryList =[];

  //   contentArray.forEach((content, index, arr) => {
  //     if ((!arr[index - 1] || arr[index - 1] === '') && (!arr[index + 1] || arr[index + 1] === '')) {
  //       const title = content.match(/(?<=^(#+)\s).+$/g);
  //       const level = content.match(/^#+\s/g);

  //       if (title != null && level != null) {
  //         // match返回的是一个字符串数组，并且最后一个字符是空格，因此level应该减一
  //         dir.push({ title: title[0], level: `h${level[0].split('').length - 1}` as HeadingLevel });
  //       }
  //     }
  //   });

  //   setDirectory(dir);
  //   console.log('dir: ', directory);
  // });

  const contentArray = content.split('\n');
  const dir: DirectoryList = [];

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
          <p key={index} className={`${dir.level}-level levels-directory`}>{dir.title}</p>
        ))
      }
    </div>
  )
}

export default HeadingDirectory;
