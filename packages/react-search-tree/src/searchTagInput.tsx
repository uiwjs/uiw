import React, { useMemo, useState, useRef, useEffect } from 'react';
import Dropdown, { DropdownProps } from '@uiw/react-dropdown';
import Icon from '@uiw/react-icon';
import Input from '@uiw/react-input';
import Tag from '@uiw/react-tag';
import { IProps } from '@uiw/utils';
import './style/index.less';

export interface DropContent extends React.ReactElement {
  value: Array<SearchTagInputOption> | undefined;
  onSelected: () => void;
  // key: any,
  // type: any,
  // props: any
  // data: Array<SearchTagInputOption>,
}

export interface SearchTagInputOption {
  label: string;
  value: any;
}

export interface SearchTagInputProps extends IProps {
  content: DropContent;
  onChange?: (_: Array<SearchTagInputOption>) => void;
  mode?: 'single' | 'multiple';
  loading?: boolean;
}

function SearchTagInput(props: SearchTagInputProps) {
  const {
    prefixCls = 'w-search-tree',
    mode = 'single',
    className,
    content,
    onChange,

    style,
    loading = false,
    ...others
  } = props;

  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  const isMultiple = useMemo(() => mode === 'multiple', [mode]);
  const [innerIsOpen, setInnerIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Array<SearchTagInputOption>>([]);
  const [selectIconType, setSelectIconType] = useState('');

  const onSelected = (selectedOption: Array<SearchTagInputOption>) => {
    console.log('selectedOption', selectedOption);
    setSelectedOption(selectedOption);
  };

  const removeSelectItem = (index: number) => {
    const selectedValue = selectedOption;
    selectedValue.splice(index, 1);
    const values = [...selectedValue];
    return values;
  };

  const handleChangeForProps = (changeValue: Array<SearchTagInputOption>) => {
    if (!onChange) return;

    onChange(changeValue);
  };

  const newContent = useMemo(() => {
    const newProps = { ...content.props, onSelected };
    return React.cloneElement(content as any, newProps);
  }, []);

  return (
    <Dropdown className={cls} trigger="focus" menu={newContent}>
      {/* <Dropdown trigger="click" menu={<div>123</div>}> */}
      {/* <a href='#' onClick={e => e.preventDefault()}>
        点击我出现下拉菜单 <Icon type="down" />
      </a> */}
      <div
        // ref={divRef}
        // onMouseOver={() => renderSelectIcon('enter')}
        // onMouseLeave={() => renderSelectIcon('leave')}
        style={{ width: 200, maxWidth: 'none', ...style }}
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
                  onClose={() => setSelectedOption(removeSelectItem(index))}
                  color="#ccc"
                >
                  {item}
                </Tag>
              );
            })}
            <Input
              style={{ flex: 1 }}
              className={`${prefixCls}-input-contents`}
              // readOnly={!showSearch}
              // size={size}
              // disabled={disabled}
              // onKeyDown={inputKeyDown}
              // onChange={handleInputChange}
              // value={selectedLabel}
              // placeholder={selectedValue.length ? '' : placeholder}
            />
          </div>
          {(selectIconType === 'close' || (selectIconType === 'loading' && loading)) && (
            <Icon type={selectIconType} spin={loading && selectIconType === 'loading'} onClick={() => {}} />
          )}
        </div>
      </div>
    </Dropdown>
  );
}

export default SearchTagInput;
