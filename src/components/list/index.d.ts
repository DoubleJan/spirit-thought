
// 分类目录
export interface Directory {
  id: string;
  name: string;
  createUserName: string;
  createUserId: string;
  updateUserName: string;
  updateUserId: string;
  createTime: string;
  updateTime: string;
  count: number;
  [props: string]: stirng;
}

// 分类目录数组
export type DirectoryList = array<Directory>

// 笔记对象
export interface Note {
  id: string;
  title: string;
  description: string;
  author: string;
  createTime: string;
  updateTime: string;
  directoryName: string;
  [props: string]: string;
}

// 笔记列表数组
export type NoteList = array<Note>

