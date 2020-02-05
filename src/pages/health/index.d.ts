
export interface Field {
  label: string;
  isSwitch?: boolean;
  need?: string;
}

export interface HealthFormType {
  [props: string]: Field
}

export interface HealthDetail {
  'name': string,
  'department': string,
  'address': string,
  'bodyStatus': boolean,
  'bodyExp'?: string,
  'touchStatus': boolean,
  'touchExp'?: string,
  'inHome': boolean,
  'isMask'?: boolean,
  'activityInfo'?: string
}

interface InputName {
  name: string
  [props: string]: any
}

type Input = Node & InputName & Element;