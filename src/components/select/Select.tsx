// 下拉单选框
import React, { useState } from 'react';
import { SelectType, SelectClick } from './index';
import './select.less';

function handleClick(props: SelectClick) {
  props.setSelectedValue(props.option.label);
  props.setIsSelected(true);
  props.onSelect(props.option);
}

function Select({ options, placeholder, onSelect = () => {}, defautValue }: SelectType) {
  const [isSelected, setIsSelected] = useState(defautValue !== undefined);
  const [selectedValue, setSelectedValue] = useState(defautValue || placeholder || '')
  return (
    <div className={"select-wrap"}>
      <span className={`select-selected-item ${isSelected ? 'selected' : 'placeholder'}`}>
        {selectedValue || ''}
      </span>
      <div className="select-list-wrap">
        {
          Array.isArray(options) && options.map((v) => (
            <p 
              className={"select-list-option"} 
              onClick={() => handleClick({option: v, setIsSelected, setSelectedValue, onSelect})} 
              key={v.value}
            >
              {v.label || '--'}
            </p>
          ))
        }
      </div>
    </div>
  )
}

export default Select;
