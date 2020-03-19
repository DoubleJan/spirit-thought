// editor组件类型定义
export interface ModalProps {
  showModal: boolean;
  inputTitle: string;
  setShowModal: Function;
  onSubmit?: Function;
}

export interface Directory {
  name: string;
  id: string;
  [props: string]: string;
}

export interface PostContentProps {
  title: string;
  type: string;
  directory: string;
  description: string;
  content: string;
  username?: string;
  email?: string;
  [props: string]: any;
}
