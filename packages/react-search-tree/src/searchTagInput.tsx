import React, { useMemo, useState, useRef, useEffect, ReactElement } from 'react';
import Dropdown from '@uiw/react-dropdown';
import Icon from '@uiw/react-icon';
import Input from '@uiw/react-input';
import Tag from '@uiw/react-tag';
import Card from '@uiw/react-card';
import { IProps } from '@uiw/utils';
import './style/index.less';

export interface DropContent {
  values: Array<SearchTagInputOption> | undefined;
  onSelected: (options: Array<SearchTagInputOption>) => void;
  // data: Array<SearchTagInputOption>,
}

export interface SearchTagInputOption {
  label: string;
  value: any;
}

export interface SearchTagInputProps extends IProps {
  content: ReactElement<DropContent>;
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
  // const isMultiple = useMemo(() => mode === 'multiple', [mode]);
  // const [innerIsOpen, setInnerIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Array<SearchTagInputOption>>([]);
  const optionRef = useRef<Array<SearchTagInputOption>>();
  optionRef.current = useMemo(() => selectedOption, [selectedOption]);
  const [selectIconType, setSelectIconType] = useState('');

  const onSelected = (selectedOption: Array<SearchTagInputOption>) => {
    setSelectedOption(selectedOption);

    onChange && onChange(selectedOption);
  };

  const removeSelectItem = (index: number) => {
    const selectedOption = optionRef.current as Array<SearchTagInputOption>;
    selectedOption.splice(index, 1);
    onSelected([...selectedOption]);
  };

  // const handleChangeForProps = (selectedOption: Array<SearchTagInputOption>) => {
  //   if (!onChange) return;
  //   onChange(selectedOption);
  // };

  const newContent = useMemo(() => {
    const newProps = { ...content.props, onSelected };
    return React.cloneElement(content as JSX.Element, newProps);
  }, []);

  return (
    <Dropdown className={cls} trigger="focus" menu={<Card>{newContent}</Card>}>
      <div
        // onMouseOver={() => renderSelectIcon('enter')}
        // onMouseLeave={() => renderSelectIcon('leave')}
        style={{ width: 200, maxWidth: 'none', ...style }}
      >
        <div className={`${prefixCls}-inner`}>
          <div style={{ display: 'flex', flexFlow: 'wrap' }}>
            {/* {optionRef.current.map((item, index) => { */}
            {selectedOption.map((item, index) => {
              return (
                <Tag
                  style={{ height: 20, margin: 1, display: 'flex', alignItems: 'center' }}
                  className={`${prefixCls}-tag`}
                  key={index}
                  closable
                  onClose={() => removeSelectItem(index)}
                  color="#ccc"
                >
                  {item.label}
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
