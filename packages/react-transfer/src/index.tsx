import React, { useEffect, useRef, useState } from 'react';
import { IProps } from '@uiw/utils';
import { DownSquareO } from '@uiw/icons/lib/DownSquareO';
import Input from '@uiw/react-input';
import TreeChecked from '@uiw/react-tree-checked';
import { TreeData } from '@uiw/react-tree';
import Checkbox from '@uiw/react-checkbox';
import TranSferWarp, { TransferArrow, TransferArrowContent, TransferCard, TransferChekedContentWrap } from './style';

export interface TransferOptionType {
  key: string | number;
  label: string;
}

enum CheckedStatus {
  UnChecked = 0,
  AllChecked = 1,
  Indeterminate = 2,
}

interface TransferProps extends IProps {
  placeholder?: string;
  bodyStyle?: React.CSSProperties;

  onChange?: (transfer: string, selectedAll: Array<TransferOptionType>) => void;
  onSearch?: (transfer: string, seachValue: string) => void;
  showSearch?: boolean;
  selectedAll?: boolean;
  value?: Array<TransferOptionType>;
  options?: TreeData[];
  // emptyOption?: React.ReactNode;
}

function Transfer(props: TransferProps) {
  const {
    placeholder,
    options,
    value = [],
    showSearch = false,
    selectedAll = false,

    bodyStyle,
    style,
    className,
    prefixCls = 'w-transfer',
  } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();

  const [searchValueLeft, searchValueLeftSet] = useState('');
  const [searchValueRight, searchValueRightSet] = useState('');
  const [selectedOptions, selectedOptionSet] = useState<Array<TreeData>>(options || []);
  const selectedOptionsShowCount = useRef<number>(0);
  const [selectOption, selectOptionSet] = useState<Map<string | number, string>>(new Map());
  const [leftSelectOption, leftSelectOptionSet] = useState<Map<string | number, string>>(new Map());
  const [leftSelectedKeys, leftSelectedKeySet] = useState<Array<string | number | undefined>>([]);
  const [rightSelectedKeys, rightSelectedKeySet] = useState<Array<string | number | undefined>>([]);
  const [rightOpions, rightOpionSet] = useState<Array<TreeData>>([]);
  const [selectAllChecked, selectAllCheckedSet] = useState<{ left: CheckedStatus; right: CheckedStatus }>({
    left: CheckedStatus.UnChecked,
    right: CheckedStatus.UnChecked,
  });

  useEffect(() => {
    if (value) {
      rightOpionSet(value || []);

      value?.forEach((selectd) => selectOption.set(selectd.key, selectd.label));
      hiddenNode((child) => !!value?.find((selectd) => child.key === selectd.key));
    }
  }, [JSON.stringify(value)]);

  const hiddenNode = (callBackfn: (child: TreeData) => boolean) => {
    selectedOptionsShowCount.current = 0;
    const hiddenNodeForSeach = (childrens: TreeData[]) => {
      childrens.forEach((child: TreeData) => {
        const isHide = callBackfn(child); // && parentIsHide;
        if (!!child.children?.length) {
          hiddenNodeForSeach(child.children);
          const find = child.children.find((item: TreeData) => !item.hideNode);
          child.hideNode = isHide && !find;
        } else {
          child.hideNode = isHide;
        }
        if (!child.hideNode) {
          selectedOptionsShowCount.current++;
        }
      });
    };
    hiddenNodeForSeach(selectedOptions);
    selectedOptionSet([...selectedOptions]);
  };

  const getOptionsRecursion = (childrens: TreeData[], selectOption: Map<string | number, string>, isAdd: boolean) => {
    const addOrDel = (key: string | number, label: string, isAdd: boolean) => {
      if (isAdd) {
        selectOption.set(key, label);
      } else {
        selectOption.delete(key);
      }
    };
    const iteratorParent = (child: TreeData) => {
      if (child.parent) {
        const selectCount = child.parent.children.filter(
          (child: TreeData) => !selectOption.get(child.key!) && !child.hideNode,
        ).length;
        addOrDel(child.parent.key, child.parent.label, selectCount === 0);
        iteratorParent(child.parent);
      }
    };

    childrens.forEach((child: TreeData) => {
      if (!!child.children?.length) {
        selectOption = getOptionsRecursion(child.children, selectOption, isAdd);
      }
      addOrDel(child.key!, child.label?.toString()!, isAdd);
      iteratorParent(child);
    });
    return selectOption;
  };

  const leftTreeOnSelected = (
    selectedKeys: Array<string | number | undefined>,
    _1: any,
    isChecked: boolean,
    evn: TreeData,
  ) => {
    leftSelectedKeySet(selectedKeys);
    const selectOptionTemp = getOptionsRecursion([evn], leftSelectOption, isChecked);
    leftSelectOptionSet(selectOptionTemp);
  };

  const rightTreeOnSelected = (selectedKeys: Array<string | number | undefined>) => {
    rightSelectedKeySet(selectedKeys);
  };

  const transferClick = (transferType: 'left' | 'right') => {
    if (transferType === 'left') {
      leftSelectOption.forEach((value, key) => {
        selectOption.set(key, value);
      });
      leftSelectOptionSet(new Map());
      leftSelectedKeySet([]);
    } else {
      rightSelectedKeys.forEach((key) => {
        selectOption.delete(key!);
      });
      rightSelectedKeySet([]);
    }

    selectOptionSet(selectOption);
    const option: Array<TransferOptionType> = [];
    selectOption.forEach((label, key) => option.push({ key, label }));
    props.onChange?.(transferType, option);
  };

  const searchValueLeftChange = (searchValue: string) => {
    hiddenNode((child: TreeData) => {
      let searchIsMatch = !(child.label as string).includes(searchValue.trim());
      if (!searchIsMatch) {
        const isSekected = rightOpions.find((selected) => selected.key === child.key);
        searchIsMatch = !!isSekected;
      }
      return searchIsMatch;
    });

    searchValueLeftSet(searchValue);

    props.onSearch?.('left', searchValue);
  };

  const searchValueRightChange = (searchValue: string) => {
    searchValueRightSet(searchValue);

    rightOpions.forEach((option) => {
      const isHide = !(option.label as string).includes(searchValue.trim());
      option.hideNode = isHide;
    });
    rightOpionSet(rightOpions);

    props.onSearch?.('right', searchValue);
  };

  const selectAllLeftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    selectAllChecked.left = isChecked ? 1 : 0;
    if (isChecked) {
      const keys: Array<string | number> = [];
      const selectedOptionsRecursion = (selectedOptions: Array<TreeData>) => {
        selectedOptions.forEach((child) => {
          if (child.children?.length) {
            selectedOptionsRecursion(child.children);
          }
          if (!child.hideNode) {
            leftSelectOption.set(child.key!, child.label as string);
            keys.push(child.key!);
          }
        });
      };
      selectedOptionsRecursion(selectedOptions);

      leftSelectOptionSet(leftSelectOption);
      leftSelectedKeySet(keys);
    } else {
      leftSelectedKeySet([]);
      leftSelectOptionSet(new Map());
    }
    selectAllCheckedSet(selectAllChecked);
  };

  const selectAllRightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    selectAllChecked.right = isChecked ? 1 : 0;
    if (isChecked) {
      const keys = rightOpions.map((child) => child.key);
      rightSelectedKeySet(keys);
    } else {
      rightSelectedKeySet([]);
    }
    selectAllCheckedSet(selectAllChecked);
  };

  const Arrow = (props: { click: () => void; style: React.CSSProperties }) => (
    <TransferArrow
      as={DownSquareO}
      onClick={() => props.click()}
      className={`${prefixCls}-arrow`}
      style={{ fontSize: 20, stroke: '#e9e9e9', ...props.style }}
    />
  );

  return (
    <TranSferWarp className={cls} style={{ width: 400, ...style }}>
      <TransferCard
        bodyStyle={{ padding: '5px 9px' }}
        title={
          <div>
            {selectedAll && (
              <Checkbox
                indeterminate={leftSelectedKeys.length < selectedOptionsShowCount.current && !!leftSelectedKeys.length}
                checked={leftSelectedKeys.length >= selectedOptionsShowCount.current && !!leftSelectedKeys.length}
                onChange={selectAllLeftChange}
              />
            )}
            <label style={{ marginLeft: 3 }}>
              {leftSelectedKeys.length}/{selectedOptionsShowCount.current}
            </label>
          </div>
        }
        className={`${prefixCls}-card`}
      >
        {showSearch && (
          <Input
            placeholder={placeholder}
            value={searchValueLeft}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchValueLeftChange(e.target.value)}
          />
        )}
        <TransferChekedContentWrap className={`${prefixCls}-cheked-content`}>
          <TreeChecked
            defaultExpandAll={true}
            placeholder={placeholder || '搜索选项'}
            data={selectedOptions}
            selectedKeys={leftSelectedKeys}
            onSelected={leftTreeOnSelected}
          />
        </TransferChekedContentWrap>
      </TransferCard>
      <TransferArrowContent className={`${prefixCls}-arrow-content`}>
        <Arrow
          click={() => transferClick('left')}
          style={{ transform: 'rotate(-90deg)', background: leftSelectedKeys.length > 0 ? '#393E48' : 'none' }}
        />
        <Arrow
          click={() => transferClick('right')}
          style={{ transform: 'rotate(90deg)', background: rightSelectedKeys.length > 0 ? '#393E48' : 'none' }}
        />
      </TransferArrowContent>
      <TransferCard
        bodyStyle={{ padding: '5px 9px' }}
        className={`${prefixCls}-card`}
        title={
          <div>
            {selectedAll && (
              <Checkbox
                indeterminate={rightSelectedKeys.length < rightOpions.length && !!rightSelectedKeys.length}
                checked={rightSelectedKeys.length === rightOpions.length && !!rightSelectedKeys.length}
                onChange={selectAllRightChange}
              />
            )}
            <label style={{ marginLeft: 3 }}>
              {rightSelectedKeys.length}/{rightOpions.length}
            </label>
          </div>
        }
      >
        {showSearch && (
          <Input
            placeholder={placeholder}
            value={searchValueRight}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchValueRightChange(e.target.value)}
          />
        )}
        <div className={`${prefixCls}-cheked-content`} style={bodyStyle}>
          <TreeChecked data={rightOpions} selectedKeys={rightSelectedKeys} onSelected={rightTreeOnSelected} />
        </div>
      </TransferCard>
    </TranSferWarp>
  );
}

export default Transfer;
