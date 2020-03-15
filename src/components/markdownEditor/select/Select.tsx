// 下拉选择
import React, { useState } from 'react';
import { SelectProps, Option, SelectClickHandler } from './index.d';
import './select.less';

function handleClickOption({ selectedItem, setSelected, setDropdown, onSelect }: SelectClickHandler) {
  setSelected(selectedItem.label);
  setDropdown(false);
  onSelect && onSelect(selectedItem.value);
}

function Select({ optionList, placeholder, name, onSelect, ...options }: SelectProps) {
  
  const [selected, setSelected] = useState();
  const [isDropdown, setDropdown] = useState(false);

  return (
    <div className={'select-wrapper'} {...options}>
      <div className="select-input" onClick={() => setDropdown(!isDropdown)}>
        <span className={`is-${selected == null ? 'placeholder' : 'selected'}`}>{selected || placeholder}</span>
      </div>
      <div className={`select-dropdown-wrap dropdown-is-${isDropdown ? 'show' : 'hidden'}`}>
        {
          Array.isArray(optionList) && optionList.map((item) => (
            <div
              className={'select-dropdown-option'}
              key={item.value}
              onClick={() => handleClickOption({ selectedItem: item, setSelected, setDropdown, onSelect })}
            >
              {item.label}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Select;