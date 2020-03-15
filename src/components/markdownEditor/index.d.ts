// editor组件类型定义
export interface ModalProps {
  showModal: boolean,
  setShowModal: Function,
  onSubmit?: Function,
}

export interface Directory {
  name: string;
  id: string;
  [props: string]: string;
}
