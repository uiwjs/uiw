import React, { useMemo } from 'react';
import Dropdown, { DropdownProps } from '@uiw/react-dropdown';
import Icon from '@uiw/react-icon';
import Menu from '@uiw/react-menu';
import Input from '@uiw/react-input';
import Tag, { TagProps } from '@uiw/react-tag';
import { IProps } from '@uiw/utils';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './style/index.less';

type ValueType = string | number;

const TagSize = { large: 25, default: 20, small: 17 };

export interface SearchSelectProps extends IProps, DropdownProps {
  mode?: 'single' | 'multiple';
  size?: 'large' | 'default' | 'small';
  maxTagCount?: number;
  valueAmount?: number;
  labelInValue?: boolean;
  loading?: boolean;
  showSearch?: boolean;
  allowClear?: boolean;
  defaultValue?: ValueType | Array<ValueType>;
  tagProps?: TagProps;
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
    valueAmount,
    size = 'default',
    option = [],
    maxTagCount,
    loading = false,
    labelInValue = false,
    prefixCls = 'w-search-select',
    className,
    mode = 'single',
    style,
    isOpen,
    value,
    defaultValue,
    showSearch = false,
    tagProps = {},
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
  const [selectedLabel, setSelectedLabel] = useState<string>('');
  const [selectIconType, setSelectIconType] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const omitTagCount = useMemo(
    () => (maxTagCount && selectedValue.length > maxTagCount ? selectedValue.length - maxTagCount : 0),
    [selectedValue.length],
  );
  const divRef = useRef<HTMLDivElement>(null);
  const tagContentRef = useRef<HTMLDivElement>(null);
  const [tagClientWidth, setTagClientWidth] = React.useState(180);

  const valueVerify = (value: ValueType | Array<ValueType> | undefined) => {
    return value !== undefined && value !== '';
  };

  const valueRef = useRef<Array<SearchSelectOptionData>>();
  valueRef.current = useMemo(() => selectedValue, [selectedValue]);

  useEffect(() => {
    if (!valueVerify(value) && valueVerify(defaultValue)) {
      selectedValueChange(defaultValue!);
    }
  }, []);

  useEffect(() => {
    if (disabled) {
      setInnerIsOpen(false);
    }
  }, [disabled]);

  useEffect(() => {
    if (valueVerify(value)) {
      selectedValueChange(value!);
    } else {
      setSelectedValue([]);
      setSelectedLabel('');
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
        opts = changeValue.map((v) => getSelectOption(option, v as ValueType)!).filter((m) => !!m);
      } else {
        const findResult = getSelectOption(option, changeValue as ValueType);
        if (findResult) {
          setSelectedLabel(findResult.label);
          opts.push(findResult);
        }
      }
    }

    if (!isMultiple && opts.length > 0) setSelectedLabel(opts[0].label || '');
    setSelectedValue(opts.slice(0, valueAmount));
  }

  function removeSelectItem(index: number) {
    const selectedValue = valueRef.current as SearchSelectOptionData[];
    selectedValue.splice(index, 1);
    const values = [...selectedValue];
    return values;
  }

  const selectedLabelChange = (value: string) => {
    setSelectedLabel(value);
    showSearch && onSearch?.(value);
  };

  function handleItemClick(item: SearchSelectOptionData) {
    setInnerIsOpen(false);
    const values = [item];
    setSelectedLabel(item.label);
    const resultValue = item.value;
    handleChange(resultValue, values);
  }

  function handleItemsClick(index: number, item?: SearchSelectOptionData) {
    let values: SearchSelectOptionData[] =
      index !== -1
        ? removeSelectItem(index)
        : [...selectedValue.slice(0, valueAmount ? valueAmount - 1 : undefined), item!];
    const resultValue = values.map((item) => item.value);
    handleChange(resultValue, values);
  }

  function handleChange(resultValue: ValueType | Array<ValueType>, values: SearchSelectOptionData[]) {
    setSelectedLabel('');
    onSelect && onSelect(resultValue);
    handleSelectChange(resultValue, values); // 支持form组件

    value === undefined && setSelectedValue(values); // 如果受控于父组件则不需要内部维护状态
  }

  // 渲染icon
  function renderSelectIcon(type: string) {
    let selectIconType;
    if (type === 'enter' && allowClear && (selectedValue.length > 0 || selectedLabel)) {
      selectIconType = 'close';
    } else {
      selectIconType = '';
    }
    setSelectIconType(selectIconType);
  }
  // handle change
  function handleInputChange(value: string) {
    setInnerIsOpen(true);
    setSelectIconType(showSearch && value ? 'loading' : '');
    // setSelectedLabel(value);
    // showSearch && onSearch && onSearch(value);
    selectedLabelChange(value);
  }
  // 清除选中的值
  function resetSelectedValue(e: React.MouseEvent<any, MouseEvent>) {
    e.stopPropagation();
    inputRef.current?.focus();
    setSelectedValue([]);
    handleInputChange('');
    setInnerIsOpen(false);
    handleSelectChange('', []);
  }
  function handleSelectChange(value: ValueType | Array<ValueType>, options: Array<SearchSelectOptionData>) {
    if (!onChange) return;

    onChange(labelInValue ? options : value);
  }

  function inputKeyDown(e: any) {
    if (isMultiple && selectedValue.length > 0 && !selectedLabel && e.keyCode === 8) {
      handleItemsClick(selectedValue.length - 1);
    }
  }

  function onVisibleChange(isOpen: boolean) {
    const selectedValue = valueRef.current as SearchSelectOptionData[];
    setInnerIsOpen(isOpen);
    if (!isOpen) selectedLabelChange('');
    if (!isMultiple && selectedValue.length > 0) {
      setSelectedLabel(selectedValue[0].label);
    }
  }

  React.useEffect(() => {
    if (tagContentRef.current?.clientWidth) {
      setTagClientWidth(tagContentRef.current?.clientWidth);
    }
  }, [tagContentRef.current]);

  return (
    <Dropdown
      className={cls}
      trigger="click"
      style={{ marginTop: 5 }}
      overlayStyl={{ width: 100 }}
      disabled={disabled}
      {...others}
      onVisibleChange={onVisibleChange}
      isOpen={innerIsOpen}
      menu={
        <Menu
          bordered
          style={{
            minHeight: 25,
            maxHeight: 280,
            minWidth: style?.width ?? 200,
            overflowY: 'scroll',
            width: style?.width,
          }}
        >
          {!option || option.length === 0 ? (
            <div style={{ color: '#c7c7c7', fontSize: 12 }}>{loading ? '正在加载数据...' : '没有数据'}</div>
          ) : (
            option.map((item) => {
              const index = selectedValue.findIndex((finds) => finds.value === item.value);
              return (
                <Menu.Item
                  active={index !== -1}
                  key={index}
                  text={item.label}
                  onClick={() => (isMultiple ? handleItemsClick(index, item) : handleItemClick(item))}
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
        onClick={() => inputRef.current?.focus()}
        style={{ width: '100%', maxWidth: 'none', ...style }}
      >
        {isMultiple ? (
          <div
            className={[`${prefixCls}-inner`, `${prefixCls}-search-${showSearch}`, `${prefixCls}-${size}`]
              .filter(Boolean)
              .join(' ')
              .trim()}
          >
            <div
              ref={tagContentRef}
              className={[`${prefixCls}-tag-content`, disabled && `${prefixCls}-tag-content-disabled`]
                .filter(Boolean)
                .join(' ')
                .trim()}
            >
              {isMultiple &&
                selectedValue.slice(0, maxTagCount).map((item, index) => {
                  return (
                    <Tag
                      style={{
                        height: TagSize[size],
                        margin: 1,
                        display: 'flex',
                        alignItems: 'center',
                        ...tagProps.style,
                      }}
                      key={index}
                      color="#393E48"
                      {...tagProps}
                      closable
                      disabled={disabled}
                      onClose={(e) => {
                        e.stopPropagation();
                        handleItemsClick(index, item);
                      }}
                    >
                      <span
                        style={{
                          maxWidth: tagClientWidth - 48,
                          textOverflow: 'ellipsis',
                          overflow: 'auto',
                        }}
                      >
                        {item.label}
                      </span>
                    </Tag>
                  );
                })}
              {!!omitTagCount && (
                <Tag style={{ height: 20, margin: 1, display: 'flex', alignItems: 'center' }} disabled={true}>
                  +{omitTagCount} …{' '}
                </Tag>
              )}
              <Input
                style={{ flex: 1, width: showSearch ? 0 : 50 }}
                className={`${prefixCls}-input-contents`}
                readOnly={!showSearch}
                size={size}
                ref={inputRef}
                disabled={disabled}
                onKeyDown={inputKeyDown}
                onChange={(e) => handleInputChange(e.target.value)}
                value={selectedLabel}
                placeholder={selectedValue.length ? '' : placeholder}
              />
            </div>
            {/* {!disabled && (selectIconType === 'close' || (selectIconType === 'loading' && loading)) && ( */}
            <Icon
              className={`${prefixCls}-multiple-colse`}
              type={'close'}
              spin={loading && selectIconType === 'loading'}
              onClick={resetSelectedValue}
            />
            {/* )} */}
          </div>
        ) : (
          <Input
            className={`${prefixCls}-search-${showSearch}`}
            readOnly={!showSearch}
            size={size}
            ref={inputRef}
            disabled={disabled}
            onChange={(e) => handleInputChange(e.target.value)}
            value={selectedLabel}
            placeholder={placeholder}
            addonAfter={
              !disabled &&
              (selectIconType === 'close' || (selectIconType === 'loading' && loading)) && (
                <Icon
                  type={selectIconType}
                  className={`${prefixCls}-singe-colse`}
                  color="#393e48"
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
