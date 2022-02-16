import React, { useMemo } from 'react';
import Dropdown, { DropdownProps } from '@uiw/react-dropdown';
import Icon from '@uiw/react-icon';
import Menu from '@uiw/react-menu';
import Input from '@uiw/react-input';
import Tag from '@uiw/react-tag';
import { IProps } from '@uiw/utils';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './style/index.less';

type ValueType = string | number | undefined;
export interface SearchSelectProps extends IProps, DropdownProps {
  mode?: 'single' | 'multiple';
  size?: 'large' | 'default' | 'small';
  loading: boolean;
  showSearch?: boolean;
  allowClear: boolean;
  defaultValue?: string | number;
  value?: ValueType;
  option: SearchSelectOptionData[];
  onSelect?: (value: ValueType | Array<ValueType>) => void;
  onSearch?: (value: string) => void;
  onChange?: (value: ValueType | Array<ValueType>) => void;
}

export interface SearchSelectOptionData {
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
    prefixCls = 'w-search-select',
    className,
    mode = 'single',
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

  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  const isMultiple = useMemo(() => mode === 'multiple', [mode]);
  const [innerIsOpen, setInnerIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Array<SearchSelectOptionData>>(
    option.filter((item) => item.value === value),
  );
  const [selectedLabel, setSelectedLabel] = useState('');
  const [selectIconType, setSelectIconType] = useState('');
  const divRef = useRef<HTMLDivElement>(null);

  const valueRef = useRef<Array<SearchSelectOptionData>>();
  valueRef.current = useMemo(() => selectedValue, [selectedValue]);

  useEffect(() => {
    if (defaultValue) {
      const defaultMenuItem = option.filter((opt) => opt.value === defaultValue);
      setSelectedValue(defaultMenuItem);
    }
  }, []);

  function removeSelectItem(index: number) {
    const selectedValue = valueRef.current as SearchSelectOptionData[];
    selectedValue.splice(index, 1);
    const values = [...selectedValue];
    return values;
  }

  function handleItemClick(item: SearchSelectOptionData) {
    setInnerIsOpen(false);
    const values = [item];
    setSelectedValue(values);
    setSelectedLabel(item.label);
    const resultValue = item.value;
    onSelect && onSelect(resultValue);
    // 支持form组件
    handleSelectChange(resultValue);
  }

  function handleItemsClick(item: SearchSelectOptionData) {
    let values: SearchSelectOptionData[] = [];
    const index = selectedValue.findIndex((finds) => finds.value === item.value);
    if (index !== -1) {
      values = removeSelectItem(index);
    } else {
      values = [...selectedValue, item];
    }
    setSelectedValue(values);
    const resultValue = values.map((item) => item.value);
    onSelect && onSelect(resultValue);
    // // 支持form组件
    handleSelectChange(resultValue);
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
    // handleSelectChange(value);
  }
  // 清除选中的值
  function resetSelectedValue() {
    setInnerIsOpen(false);
    setSelectedValue([]);
    setSelectedLabel('');
    setSelectIconType('');
    handleSelectChange('');
  }
  function handleSelectChange(value: ValueType | Array<ValueType>) {
    onChange && onChange(value);
  }

  function inputKeyDown(e: any) {
    if (selectedValue.length > 0 && !!selectedLabel && e.keyCode === 8) {
      const values = removeSelectItem(selectedValue.length - 1);
      setSelectedValue(values);
    }
  }

  return (
    <Dropdown
      className={cls}
      trigger="focus"
      style={{ marginTop: 5 }}
      disabled={option && option.length > 0 ? false : true}
      {...others}
      onVisibleChange={(open) => {
        if (!open && isMultiple) setSelectedLabel('');
        setInnerIsOpen(open);
      }}
      isOpen={innerIsOpen}
      menu={
        <Menu
          bordered
          style={{
            minHeight: 25,
            maxHeight: 280,
            minWidth: style?.minWidth || 200,
            overflowY: 'scroll',
            width: divRef.current ? divRef.current.offsetWidth : 'auto',
          }}
        >
          {!option || option.length === 0 ? (
            <div style={{ color: '#c7c7c7', fontSize: 12 }}>{loading ? '正在加载数据...' : '没有数据'}</div>
          ) : (
            option.map((item, idx) => {
              const active = !!selectedValue.find((finds) => finds.value === item.value);
              return (
                <Menu.Item
                  active={active}
                  key={idx}
                  text={item.label}
                  onClick={() => (isMultiple ? handleItemsClick(item) : handleItemClick(item))}
                />
              );
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
        <div
          style={
            isMultiple
              ? {
                  display: 'flex',
                  flexFlow: 'wrap',
                  padding: 2,
                  borderRadius: 3,
                  boxShadow: '0px 0px 2px #333',
                }
              : undefined
          }
        >
          {isMultiple &&
            selectedValue.map((item, index) => {
              return (
                <Tag
                  style={{ margin: '0px 3px 3px 0px', display: 'flex', alignItems: 'center' }}
                  key={index}
                  closable
                  onClose={() => setSelectedValue(removeSelectItem(index))}
                  color="#ccc"
                >
                  {item.label}
                </Tag>
              );
            })}
          <Input
            style={{ flex: 1, boxShadow: 'none' }}
            className={isMultiple ? `${prefixCls}-inptContents` : undefined}
            readOnly={!showSearch}
            size={size}
            disabled={disabled}
            onKeyDown={inputKeyDown}
            onChange={handleInputChange}
            value={selectedLabel}
            placeholder={placeholder}
            addonAfter={
              (selectIconType === 'close' || (selectIconType === 'loading' && loading)) && (
                <Icon
                  type={selectIconType}
                  spin={loading && selectIconType === 'loading'}
                  onClick={resetSelectedValue}
                />
              )
            }
          />
        </div>
      </div>
    </Dropdown>
  );
}
