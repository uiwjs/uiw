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

type ValueType = string | number;
export interface SearchSelectProps extends IProps, DropdownProps {
  mode?: 'single' | 'multiple';
  size?: 'large' | 'default' | 'small';
  maxTagCount?: number;
  labelInValue?: boolean;
  loading?: boolean;
  showSearch?: boolean;
  allowClear?: boolean;
  defaultValue?: ValueType | Array<ValueType>;
  value?: ValueType | Array<ValueType>;
  option: SearchSelectOptionData[];
  onSelect?: (value: ValueType | Array<ValueType> | Array<SearchSelectOptionData>) => void;
  onSearch?: (value: string) => void;
  onChange?: (value: ValueType | Array<ValueType> | Array<SearchSelectOptionData>) => void;
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
    maxTagCount,
    option = [],
    loading = false,
    labelInValue = false,
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
  const [selectedValue, setSelectedValue] = useState<Array<SearchSelectOptionData>>([]);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [selectIconType, setSelectIconType] = useState('');
  const omitTagCount = useMemo(
    () => (maxTagCount && selectedValue.length > maxTagCount ? selectedValue.length - maxTagCount : 0),
    [selectedValue.length],
  );
  const divRef = useRef<HTMLDivElement>(null);

  const valueRef = useRef<Array<SearchSelectOptionData>>();
  valueRef.current = useMemo(() => selectedValue, [selectedValue]);

  useEffect(() => {
    if (value === undefined && defaultValue !== undefined) {
      selectedValueChange(defaultValue);
    }
  }, []);

  useEffect(() => {
    if (value !== undefined) {
      selectedValueChange(value!);
    }
  }, [JSON.stringify(value)]);

  const getSelectOption = (option: Array<SearchSelectOptionData>, value: ValueType) => {
    const findResult = option.find((item) => item.value === value);
    return findResult;
  };

  function selectedValueChange(
    changeValue: ValueType | Array<ValueType> | SearchSelectOptionData | Array<SearchSelectOptionData>,
  ) {
    let opts: Array<SearchSelectOptionData> = [];

    if (labelInValue) {
      if (Array.isArray(changeValue)) {
        opts = changeValue as Array<SearchSelectOptionData>;
      } else {
        opts.push(changeValue as SearchSelectOptionData);
      }
    } else {
      if (Array.isArray(changeValue)) {
        opts = changeValue.map((v) => getSelectOption(option, v as ValueType)!);
      } else {
        const findResult = getSelectOption(option, changeValue as ValueType);
        if (findResult) {
          setSelectedLabel(findResult.label);
          opts.push(findResult);
        }
      }
    }
    setSelectedValue(opts);
  }

  function removeSelectItem(index: number) {
    const selectedValue = valueRef.current as SearchSelectOptionData[];
    selectedValue.splice(index, 1);
    const values = [...selectedValue];
    return values;
  }

  function handleItemClick(item: SearchSelectOptionData) {
    setInnerIsOpen(false);
    const values = [item];
    setSelectedLabel(item.label);
    const resultValue = item.value;
    onSelect && onSelect(resultValue);
    handleSelectChange(resultValue, values); // 支持form组件

    value === undefined && setSelectedValue(values); // 如果存在props.value,内部不维护value状态
  }

  function handleItemsClick(item: SearchSelectOptionData) {
    let values: SearchSelectOptionData[] = [];
    const index = selectedValue.findIndex((finds) => finds.value === item.value);
    if (index !== -1) {
      values = removeSelectItem(index);
    } else {
      values = [...selectedValue, item];
    }
    const resultValue = values.map((item) => item.value);
    onSelect && onSelect(resultValue);
    handleSelectChange(resultValue, values); // 支持form组件

    value === undefined && setSelectedValue(values);
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
    handleSelectChange('', []);
  }
  function handleSelectChange(value: ValueType | Array<ValueType>, options: Array<SearchSelectOptionData>) {
    if (!onChange) return;

    onChange(labelInValue ? options : value);
  }

  function inputKeyDown(e: any) {
    if (isMultiple && selectedValue.length > 0 && !selectedLabel && e.keyCode === 8) {
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
            minWidth: 200,
            overflowY: 'scroll',
            width: divRef.current ? divRef.current.offsetWidth : 'auto',
          }}
        >
          {!option || option.length === 0 ? (
            <div style={{ color: '#c7c7c7', fontSize: 12 }}>{loading ? '正在加载数据...' : '没有数据'}</div>
          ) : (
            option.map((opt, idx) => {
              const active = !!getSelectOption(selectedValue, opt.value);
              return (
                <Menu.Item
                  active={active}
                  key={idx}
                  text={opt.label}
                  onClick={() => (isMultiple ? handleItemsClick(opt) : handleItemClick(opt))}
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
        style={{ width: '100%', maxWidth: 'none', ...style }}
      >
        {isMultiple ? (
          <div className={`${prefixCls}-inner`}>
            <div style={{ display: 'flex', flexFlow: 'wrap' }}>
              {isMultiple &&
                selectedValue.slice(0, maxTagCount).map((item, index) => {
                  return (
                    <Tag
                      style={{ height: 20, margin: 1, display: 'flex', alignItems: 'center' }}
                      className={`${prefixCls}-tag`}
                      key={index}
                      closable
                      onClose={() => setSelectedValue(removeSelectItem(index))}
                      color="#ccc"
                    >
                      {item.label}
                    </Tag>
                  );
                })}
              {!!omitTagCount && (
                <Tag style={{ height: 20, margin: 1, display: 'flex', alignItems: 'center' }} disabled={true}>
                  +{omitTagCount} …{' '}
                </Tag>
              )}
              <Input
                style={{ flex: 1 }}
                className={`${prefixCls}-input-contents`}
                readOnly={!showSearch}
                size={size}
                disabled={disabled}
                onKeyDown={inputKeyDown}
                onChange={handleInputChange}
                value={selectedLabel}
                placeholder={!selectedValue.length && placeholder}
              />
            </div>
            {(selectIconType === 'close' || (selectIconType === 'loading' && loading)) && (
              <Icon type={selectIconType} spin={loading && selectIconType === 'loading'} onClick={resetSelectedValue} />
            )}
          </div>
        ) : (
          <Input
            readOnly={!showSearch}
            size={size}
            disabled={disabled}
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
        )}
      </div>
    </Dropdown>
  );
}
