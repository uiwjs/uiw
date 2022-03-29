import React, { useState, useEffect, useMemo } from 'react';
import Input from '@uiw/react-input';
import { IProps } from '@uiw/utils';
import Dropdown, { DropdownProps } from '@uiw/react-dropdown';
import Menu from '@uiw/react-menu';
import Icon from '@uiw/react-icon';
import './style/index.less';

type ValueType = Array<string | number>;
type OptionType = { value: string | number; label: React.ReactNode; children?: Array<OptionType> };
type SearchOptionType = { label: string; options: Array<OptionType> };

export interface CascaderProps extends IProps, DropdownProps {
  option?: Array<OptionType>;
  value?: ValueType;
  onChange?: (isSeleted: boolean, value: ValueType, selectedOptions: Array<OptionType>) => void;
  onSearch?: boolean | ((searchText: string) => void);
  allowClear?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

function Cascader(props: CascaderProps) {
  const {
    value,
    onChange,
    onSearch,

    disabled,
    allowClear,
    placeholder,
    prefixCls = 'w-cascader',
    className,
    style = { width: 200 },
    option = [],
    others,
  } = props;

  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  const [innerIsOpen, setInnerIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Array<OptionType>>([]);
  const [selectIconType, setSelectIconType] = useState('');
  const [searchText, setSearchText] = useState<string>('');
  const [searchOn, setSearchOn] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchOption, setSearchOption] = useState<Array<SearchOptionType>>();

  useEffect(() => {
    if (onSearch) {
      const tempOptions: Array<SearchOptionType> = [];
      iteratorOption(option, (opt) => {
        const label = opt.map((m) => m.label).join(' / ');
        tempOptions.push({ label, options: opt });
      });
      setSearchOption(tempOptions);
    }
  }, [onSearch]);

  const iteratorOption = (
    options: Array<OptionType>,
    cb: (opt: Array<OptionType>) => void,
    opts: Array<OptionType> = [],
  ) => {
    options.map((opt) => {
      const optsTemp = [...opts, opt];
      if (opt.children) {
        iteratorOption(opt.children, cb, optsTemp);
      } else {
        cb?.(optsTemp);
      }
    });
  };

  useEffect(() => {
    if (value) {
      const valueTemp: Array<OptionType> = [];
      let optChildren = option;
      value?.map((item) => {
        const findOpt = optChildren.find((opt) => opt.value === item);
        optChildren = findOpt?.children || [];
        valueTemp.push({ label: item, value: item, ...findOpt });
      });
      setSelectedValue(valueTemp);
    }
  }, [value]);

  function onVisibleChange(isOpen: boolean) {
    setInnerIsOpen(isOpen);
  }

  function renderSelectIcon(type: string) {
    let selectIconType;
    if (type === 'enter' && allowClear && selectedValue.length > 0) {
      selectIconType = 'close';
    } else {
      selectIconType = '';
    }
    setSelectIconType(selectIconType);
  }

  const searchItemClick = (options: Array<OptionType>) => {
    setSearchText('');
    setInnerIsOpen(false);
    handelChange(false, options);
  };

  const handleItemClick = (optionsItem: OptionType, level: number) => {
    selectedValue.splice(level, selectedValue.length - level, optionsItem);

    handelChange(true, selectedValue);
  };

  const handelChange = (isSeleted: boolean, selectedValue: Array<OptionType>) => {
    setSelectedValue([...selectedValue]);
    const value = selectedValue.map((item) => item.value);
    onChange?.(isSeleted, value, selectedValue);
  };

  const onClear = (e: React.MouseEvent<any, MouseEvent>) => {
    e.stopPropagation();
    handelChange(false, []);
  };

  const handelSearch = (searchText: string) => {
    setSearchText(searchText);
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!innerIsOpen) {
      setInnerIsOpen(!innerIsOpen);
    }
    const value = e.target.value;
    onSearch && handelSearch(value);
  };

  const widths = (style?.width as number) * 0.7 || undefined;

  const OptionIter = (option: Array<OptionType>, level: number = 0) => {
    if (!option) return;

    return (
      <Menu
        key={level}
        bordered
        style={{
          minHeight: 25,
          minWidth: widths,
          overflowY: 'scroll',
          width: widths,
        }}
      >
        {!option || option.length === 0 ? (
          <div style={{ color: '#c7c7c7', fontSize: 12 }}>{'没有数据'}</div>
        ) : (
          option.map((opt, index) => {
            const active = selectedValue[level]?.value === opt.value;
            return (
              <Menu.Item
                active={active}
                key={index}
                text={opt.label}
                addonAfter={opt.children ? <Icon type="right" /> : undefined}
                onClick={() => handleItemClick(opt, level)}
              />
            );
          })
        )}
      </Menu>
    ) as JSX.Element;
  };

  useEffect(() => {
    const inputValue = selectedValue.map((opt) => opt.label).join(' / ');
    setInputValue(inputValue);
  }, [selectedValue]);

  return (
    <Dropdown
      className={cls}
      trigger="click"
      style={{ marginTop: 5, ...style }}
      overlayStyl={{ width: 100 }}
      disabled={disabled}
      {...others}
      onVisibleChange={onVisibleChange}
      isOpen={innerIsOpen}
      menu={
        !searchText ? (
          <div style={{ display: 'flex' }}>
            {new Array(selectedValue.length + 1)
              .fill(0)
              .map((_, index) => {
                const options = index ? selectedValue[index - 1]?.children! : option;
                return OptionIter(options, index);
              })
              .filter((m) => !!m)}
          </div>
        ) : (
          <Menu
            bordered
            style={{
              minHeight: 25,
              minWidth: style?.width,
              overflowY: 'scroll',
              width: style?.width,
            }}
          >
            {!searchOption || searchOption.length === 0 ? (
              <div style={{ color: '#c7c7c7', fontSize: 12 }}>{'没有数据'}</div>
            ) : (
              searchOption
                .filter((opt) => opt.label.includes(searchText.trim()))
                .map((opt, index) => {
                  return (
                    <Menu.Item
                      key={index}
                      text={opt.label}
                      onClick={() => searchItemClick(opt.options)} //
                    />
                  );
                })
            )}
          </Menu>
        )
      }
    >
      <span onMouseLeave={() => renderSelectIcon('leave')} onMouseOver={() => renderSelectIcon('enter')}>
        <Input
          value={searchOn ? searchText : inputValue}
          onChange={inputChange}
          disabled={disabled}
          placeholder={searchOn ? inputValue : placeholder}
          style={{ width: style?.width }}
          onFocus={() => onSearch && setSearchOn(true)}
          onBlur={() => onSearch && setSearchOn(false)}
          readOnly={!onSearch}
          addonAfter={
            <span style={{ width: 'auto' }}>
              {!disabled && selectIconType === 'close' && (
                <Icon type={selectIconType} onClick={onClear} className={`${prefixCls}-close`} />
              )}
            </span>
          }
        />
      </span>
    </Dropdown>
  );
}

export default Cascader;
