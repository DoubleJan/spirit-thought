// message 枚举定义

export enum MESSAGE_TYPE { SUCCESS = "SUCCESS", WARN = 'WARNING', INFO = 'INFO', ERROR = 'ERROR' }

export interface MessageProps {
  type: MESSAGE_TYPE;
  message: string;
}