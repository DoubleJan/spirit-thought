// select组件类型定义

// options 数组
export type OptionArray = Array<Option>;

// select option的项
export interface Option {
  value: string;
  label: string;
  [props: string]: any;
}

// Select类型定义
export interface SelectType {
  options: OptionArray;
  placeholder: string;
  onSelect?: (Option) => void,
  defautValue?: string;
}

// Select Click
export interface SelectClick {
  option: Option;
  setIsSelected: (isSelected: boolean) => void;
  setSelectedValue: (value: string) => void;
  onSelect: (Option) => void;
}
