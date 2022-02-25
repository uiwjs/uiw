import React, { useMemo, useState, useRef, useEffect, ReactElement } from 'react';
import Dropdown, { DropdownProps } from '@uiw/react-dropdown';
import Icon from '@uiw/react-icon';
import Input from '@uiw/react-input';
import Tag from '@uiw/react-tag';
import Card from '@uiw/react-card';
import { IProps } from '@uiw/utils';
import './style/index.less';

export interface DropContent<V> {
  values: Array<V>;
  onSelected?: (selectedAll: Array<V>, selectd: V, isChecked: boolean) => void;
  options?: Array<any>;
}

export interface SearchTagInputOption {
  label: string;
  key: string | number;
}

export interface SearchTagInputProps<V> extends IProps, DropdownProps, DropContent<V> {
  allowClear?: boolean;
  content: ReactElement<DropContent<V>>;
  size?: 'large' | 'default' | 'small';
  onChange: (selectedAll: Array<V>, selectd: V, isChecked: boolean) => void;
  onSearch?: (seachValue: string) => void;
  // mode?: 'single' | 'multiple';
  loading?: boolean;
  placeholder?: string;
}

function SearchTagInput<V extends SearchTagInputOption>(props: SearchTagInputProps<V>) {
  const {
    prefixCls = 'w-search-tree',
    mode = 'single',
    size = 'default',
    disabled = false,
    allowClear = false,
    loading = false,
    className,
    style,
    placeholder,

    content,
    options,
    values,
    onChange,
    onSearch,
    ...others
  } = props;

  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  // const isMultiple = useMemo(() => mode === 'multiple', [mode]);
  // const [innerIsOpen, setInnerIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Array<V>>(values);
  const optionRef = useRef<Array<V>>();
  const [searchValue, searchValueSet] = useState<string>('');
  optionRef.current = useMemo(() => selectedOption, [selectedOption]);
  const [selectIconType, setSelectIconType] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSelectedOption(values);
  }, [JSON.stringify(values)]);

  function renderSelectIcon(type: string) {
    const selectIconType = type === 'enter' && allowClear && (!!selectedOption.length || searchValue) ? 'close' : '';
    setSelectIconType(selectIconType);
  }

  const handleSelectChange = (selectedAll: Array<V>, selectd?: V, isChecked: boolean = true) => {
    setSelectedOption(selectedAll);

    onChange && onChange(selectedAll, selectd!, isChecked);
  };

  const removeSelectItem = (index: number) => {
    const selectedOption = optionRef.current as Array<V>;
    const curreentItem = selectedOption[index];
    selectedOption.splice(index, 1);
    handleSelectChange([...selectedOption], curreentItem, false);
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    searchValueSet(value);
    onSearch?.(value);
    setSelectIconType(value ? 'loading' : '');
  }

  // 清除选中的值
  function resetSelectedValue() {
    // setInnerIsOpen(false);
    setSelectedOption([]);
    searchValueSet('');
    setSelectIconType('');
    handleSelectChange([]);
  }

  function inputKeyDown(e: any) {
    if (selectedOption.length > 0 && !searchValue && e.keyCode === 8) {
      removeSelectItem(selectedOption.length - 1);
    }
  }

  const newContent = useMemo(() => {
    const newProps = {
      ...content.props,
      onSelected: handleSelectChange,
      values: selectedOption,
      options,
    };
    return React.cloneElement(content as JSX.Element, newProps);
  }, [selectedOption, options]);

  return (
    <Dropdown className={cls} trigger="focus" {...others} menu={<Card>{newContent}</Card>}>
      <div
        onMouseOver={() => renderSelectIcon('enter')}
        onMouseLeave={() => renderSelectIcon('leave')}
        onClick={() => inputRef.current?.focus()}
        style={{ minWidth: 200, maxWidth: 'none', ...style }}
      >
        <div className={`${prefixCls}-inner`}>
          <div style={{ display: 'flex', flexFlow: 'wrap' }}>
            {selectedOption.map((item, index) => {
              return (
                <Tag
                  style={{ height: 20, margin: 1, display: 'flex', alignItems: 'center' }}
                  className={`${prefixCls}-tag`}
                  key={index}
                  closable
                  color="#393E48"
                  onClose={(e) => {
                    e.stopPropagation();
                    removeSelectItem(index);
                  }}
                >
                  {item.label}
                </Tag>
              );
            })}
            <Input
              ref={inputRef}
              style={{ flex: 1, minWidth: 30 }}
              className={`${prefixCls}-input-contents`}
              size={size}
              disabled={disabled}
              onKeyDown={inputKeyDown}
              onChange={handleInputChange}
              value={searchValue}
              placeholder={selectedOption.length ? '' : placeholder}
              // readOnly={false}
            />
          </div>
          <span style={{ height: 25 }} className={`${prefixCls}-close-tag-contents`}>
            {(selectIconType === 'close' || (selectIconType === 'loading' && loading)) && (
              <Icon type={selectIconType} spin={loading && selectIconType === 'loading'} onClick={resetSelectedValue} />
            )}
          </span>
        </div>
      </div>
    </Dropdown>
  );
}

export default SearchTagInput;
