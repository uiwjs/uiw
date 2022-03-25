import React, { useState, useEffect, useMemo } from 'react';
import Input from '@uiw/react-input';
import { IProps } from '@uiw/utils';
import Dropdown, { DropdownProps } from '@uiw/react-dropdown';
import Menu from '@uiw/react-menu';
import Icon from '@uiw/react-icon';

type ValueType = Array<string | number>;
type OptionType = { value: string | number; label: React.ReactNode; children?: Array<OptionType> };

export interface CascaderProps extends IProps, DropdownProps {
  option?: Array<OptionType>;
  value?: ValueType;
  onChange?: (current: OptionType, value: ValueType, selectedOptions: Array<OptionType>) => void;
  allowClear?: boolean;
  placeholder?: string;
  isOpen?: boolean;
}

function Cascader(props: CascaderProps) {
  const {
    value,
    onChange,

    placeholder,
    prefixCls = 'w-search-select',
    className,
    style = { width: 200 },
    option = [],
    others,
  } = props;

  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  const [innerIsOpen, setInnerIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Array<OptionType>>([]);

  useEffect(() => {
    const valueTemp: Array<OptionType> = [];
    let optChildren = option;
    value?.map((item) => {
      const findOpt = optChildren.find((opt) => opt.value === item);
      optChildren = findOpt?.children || [];
      valueTemp.push({ label: item, value: item, ...findOpt });
    });
    setSelectedValue(valueTemp);
  }, [value]);

  function onVisibleChange(isOpen: boolean) {
    setInnerIsOpen(isOpen);
  }

  const handleItemClick = (optionsItem: OptionType, level: number) => {
    selectedValue.splice(level, selectedValue.length - level, optionsItem);
    setSelectedValue([...selectedValue]);

    handelChange(optionsItem);
  };

  const handelChange = (current: OptionType) => {
    const value = selectedValue.map((item) => item.value);
    props.onChange?.(current, value, selectedValue);
  };

  const widths = (style?.width as number) * 0.5 || undefined;

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
          option.map((item, index) => {
            const active = selectedValue[level]?.value === item.value;
            return (
              <Menu.Item
                active={active}
                key={index}
                text={item.label}
                addonAfter={item.children ? <Icon type="right" /> : undefined}
                onClick={() => handleItemClick(item, level)}
              />
            );
          })
        )}
      </Menu>
    ) as JSX.Element;
  };

  const inputValue = useMemo(() => {
    return selectedValue.map((item) => item.label).join(' / ');
  }, [selectedValue.length]);

  return (
    <Dropdown
      className={cls}
      trigger="click"
      style={{ marginTop: 5, ...style }}
      overlayStyl={{ width: 100 }}
      {...others}
      onVisibleChange={onVisibleChange}
      isOpen={innerIsOpen}
      menu={
        <div style={{ display: 'flex' }}>
          {new Array(selectedValue.length + 1)
            .fill(0)
            .map((_, index) => {
              const options = index ? selectedValue[index - 1]?.children! : option;
              return OptionIter(options, index);
            })
            .filter((m) => !!m)}
        </div>
      }
    >
      <Input value={inputValue} onChange={() => {}} placeholder={placeholder} style={{ width: style?.width }} />
    </Dropdown>
  );
}

export default Cascader;
