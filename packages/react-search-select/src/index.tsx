import React from 'react';
import Dropdown, { DropdownProps } from '@uiw/react-dropdown';
import Icon from '@uiw/react-icon';
import Menu from '@uiw/react-menu';
import Input from '@uiw/react-input';
import { IProps } from '@uiw/utils';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export interface SearchSelectProps extends IProps, DropdownProps {
  size?: 'large' | 'default' | 'small';
  loading: boolean;
  showSearch?: boolean;
  allowClear: boolean;
  defaultValue?: string | number;
  value?: string | number;
  option: {
    label: string;
    value: string | number;
    key: any;
    [propName: string]: any;
  }[];
  onSelect?: (value: string | number) => void;
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
}

export interface MenuItemData {
  label: string;
  value: string | number;
  [keyName: string]: any;
}

export default function SearchSelect(props: SearchSelectProps) {
  const {
    allowClear = false,
    disabled = false,
    size = 'default',
    option = [],
    loading = false,
    prefixCls,
    className,
    style,
    isOpen,
    value,
    defaultValue,
    showSearch,
    placeholder,
    onSearch,
    onChange,
    onSelect,
    ...others
  } = props;

  const [innerIsOpen, setInnerIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [selectIconType, setSelectIconType] = useState('');
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultValue) {
      const defaultMenuItem = option.find((menuItem: MenuItemData) => defaultValue === menuItem.value);
      setSelectedValue(defaultValue);
      setSelectedLabel(defaultMenuItem ? defaultMenuItem.label : '');
    }
  }, []);

  useEffect(() => {
    if (value !== selectedValue) {
      setSelectedValue(value);
    }
  }, [value]);

  function handleItemClick(item: MenuItemData) {
    setInnerIsOpen(false);
    setSelectedValue(item.value);
    setSelectedLabel(item.label);
    onSelect && onSelect(item.value);
    // 支持form组件
    handleSelectChange(item.value);
  }

  // 渲染icon
  function renderSelectIcon(type: string) {
    let selectIconType;
    if (type === 'enter' && allowClear && selectedValue) {
      selectIconType = 'close';
    } else {
      selectIconType = '';
    }
    setSelectIconType(selectIconType);
  }
  // handle change
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInnerIsOpen(!!value);
    setSelectedLabel(value);
    setSelectIconType(showSearch && value ? 'loading' : '');
    showSearch && onSearch && onSearch(value);
    handleSelectChange(value);
  }
  // 清除选中的值
  function resetSelectedValue() {
    setInnerIsOpen(false);
    setSelectedValue('');
    setSelectedLabel('');
    setSelectIconType('');
    handleSelectChange('');
  }
  function handleSelectChange(value: any) {
    onChange && onChange(value);
  }

  return (
    <Dropdown
      trigger="focus"
      style={{ marginTop: 5 }}
      disabled={option && option.length > 0 ? false : true}
      {...others}
      onVisibleChange={(open) => setInnerIsOpen(open)}
      isOpen={innerIsOpen}
      menu={
        <Menu
          bordered
          style={{
            minHeight: 25,
            maxHeight: 280,
            overflowY: 'scroll',
            width: divRef.current ? divRef.current.offsetWidth : 'auto',
          }}
        >
          {!option || option.length === 0 ? (
            <div style={{ color: '#c7c7c7', fontSize: 12 }}>{loading ? '正在加载数据...' : '没有数据'}</div>
          ) : (
            option.map((item, idx) => {
              const active = selectedValue === item.value;
              return <Menu.Item active={active} key={idx} text={item.label} onClick={() => handleItemClick(item)} />;
            })
          )}
        </Menu>
      }
    >
      <div
        ref={divRef}
        onMouseOver={() => renderSelectIcon('enter')}
        onMouseLeave={() => renderSelectIcon('leave')}
        style={style}
      >
        <Input
          readOnly={!showSearch}
          size={size}
          disabled={disabled}
          onChange={handleInputChange}
          value={selectedLabel}
          placeholder={placeholder}
          addonAfter={
            (selectIconType === 'close' || (selectIconType === 'loading' && loading)) && (
              <Icon type={selectIconType} spin={loading && selectIconType === 'loading'} onClick={resetSelectedValue} />
            )
          }
        />
      </div>
    </Dropdown>
  );
}
