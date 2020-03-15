// select类型定义

export interface SelectProps {
  optionList: Array<Option>,
  placeholder: string;
  name: string;
  onSelect?: Function;
  [props: string]: any;
}

export interface SelectClickHandler {
  selectedItem: Option;
  setSelected: Function;
  setDropdown: Function;
  onSelect?: Function;

}

export interface Option {
  value: string;
  label: string;
  [props: string]: any;
}