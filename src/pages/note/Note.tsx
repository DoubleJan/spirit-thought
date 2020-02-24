// 笔记
import React, { useEffect, useState } from 'react';
import * as noteServ from './noteServ';
import ListView from './../../components/list/ListView';
import { DirectoryList, NoteList } from './../../components/list';

// 获取笔记分类目录
async function getNoteDirectory(cb: Function) {
  const res = await noteServ.getNoteDirectory();
  cb(res);
}

// 获取笔记列表
async function getNoteList(cb: Function) {
  const res = await noteServ.getNoteList();
  cb(res);
}

function Note() {
  
  const [directoryList, setDirectoryList]: [DirectoryList, Function] = useState([]);
  const [noteList, setNoteList]: [NoteList, Function] = useState([]);

  useEffect(() => {
    getNoteDirectory((res: any) => {
      if (Array.isArray(res.data)) {
        setDirectoryList(res.data);
      }
    });

    getNoteList((res: any) => {
      if (Array.isArray(res.data)) {
        setNoteList(res.data);
      }
    })
    
  }, []);


  return (
    <ListView { ...{ directoryList, noteList, routerPath: '/note/reader' } } />
  )
}

export default Note;