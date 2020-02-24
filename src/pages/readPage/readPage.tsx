// note笔记，article文章，通用的阅读页面
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Reader from '../../components/reader/Reader';
import * as readServ from './readPageServ';

// 获取文件
async function getContent(type: string, url: string, cb: Function) {
  const res = await readServ.getContent({ type, url });
  cb(res);
}

function ReadPage() {
  const [content, setContent] = useState("");
  const location = useLocation();
  
  const path = location.pathname.match(/^\S+(?=\/reader$)/g)
  const search = location.search.match(/(?<=url=)\S+$/g);

  useEffect(() => {
    if (Array.isArray(path) && Array.isArray(search)) {
      getContent(path[0], search[0], (res: any) => {
        setContent(res);
      });
    }
  }, [path, search]);

  return <Reader content={content}/>
}

export default ReadPage;