import React, { useEffect, useRef, useState } from 'react';
import { IProps } from '@uiw/utils';
import Card from '@uiw/react-card';
import Icon from '@uiw/react-icon';
import Input from '@uiw/react-input';
import TreeChecked from '@uiw/react-tree-checked';
import { TreeData } from '@uiw/react-tree';
import './style/index.less';
import Checkbox from '@uiw/react-checkbox';

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
    value,
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
  const [leftSelectedKeys, leftSelectedKeySet] = useState<Array<string | number | undefined>>([]);
  const [rightSelectedKeys, rightSelectedKeySet] = useState<Array<string | number | undefined>>([]);
  const [rightOpions, rightOpionSet] = useState<Array<TreeData>>([]);
  const [selectAllChecked, selectAllCheckedSet] = useState<{ left: CheckedStatus; right: CheckedStatus }>({
    left: CheckedStatus.UnChecked,
    right: CheckedStatus.UnChecked,
  });

  useEffect(() => {
    leftSelectedKeySet([]);
    rightSelectedKeySet([]);

    rightOpionSet(value || []);

    value?.forEach((selectd) => selectOption.set(selectd.key, selectd.label));
    hiddenNode((child) => !!value?.find((selectd) => child.key === selectd.key));
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
          if (!child.hideNode) {
            selectedOptionsShowCount.current++;
          }
        }
      });
    };
    hiddenNodeForSeach(selectedOptions);
    selectedOptionSet([...selectedOptions]);
  };

  const leftTreeOnSelected = (
    selectedKeys: Array<string | number | undefined>,
    _1: any,
    isChecked: boolean,
    evn: TreeData,
  ) => {
    selectedAllActive(selectedKeys, 'left');

    leftSelectedKeySet(selectedKeys);
    const selectOptionTemp = getOptionsRecursion([evn], selectOption, isChecked);
    selectOptionSet(selectOptionTemp);
  };

  const rightTreeOnSelected = (selectedKeys: Array<string | number | undefined>) => {
    selectedAllActive(selectedKeys, 'right');

    rightSelectedKeySet(selectedKeys);
    selectedKeys.forEach((key) => {
      selectOption.delete(key!);
    });
    selectOptionSet(selectOption);
  };

  function selectedAllActive(selectedKeys: (string | number | undefined)[], key: 'left' | 'right') {
    let selectedAll = true;
    rightOpions.forEach((selected) => {
      const find = selectedKeys.find((key) => key === selected.key);
      selectedAll = selectedAll && !!find;
    });
    selectAllChecked[key] = selectedAll
      ? CheckedStatus.AllChecked
      : selectedKeys.length
      ? CheckedStatus.Indeterminate
      : CheckedStatus.UnChecked;

    selectAllCheckedSet(selectAllChecked);
  }

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
        const selectCount = child.parent.children.filter((child: TreeData) => !selectOption.get(child.key!)).length;
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

  const transferClick = (transferType: string) => {
    selectAllChecked.right = CheckedStatus.UnChecked;
    selectAllCheckedSet(selectAllChecked);

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

  const selectAllCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    selectAllChecked.right = isChecked ? 1 : 0;
    if (isChecked) {
      const keys = rightOpions.map((selected) => {
        selectOption.delete(selected.key!);
        return selected.key;
      });
      rightSelectedKeySet(keys);
    } else {
      rightSelectedKeySet([]);
    }
    selectOptionSet(selectOption);
    selectAllCheckedSet(selectAllChecked);
  };

  const Arrow = (props: { click: () => void; style: React.CSSProperties }) => (
    <Icon
      onClick={() => props.click()}
      type="down-square-o"
      className={`${prefixCls}-arrow`}
      style={{ fontSize: 20, stroke: '#e9e9e9', fill: '#333', ...props.style }}
    />
  );

  return (
    <div className={cls} style={{ width: 400, ...style }}>
      <Card
        bodyStyle={{ padding: 5 }}
        title={
          <div>
            {/* <Checkbox
              indeterminate={selectAllChecked.left === CheckedStatus.Indeterminate}
              checked={selectAllChecked.left === CheckedStatus.AllChecked}
              onChange={selectAllCheckedChange}
            /> */}
            <span style={{ marginLeft: 10 }}>
              {leftSelectedKeys.length}/{selectedOptionsShowCount.current}
            </span>
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
        <div className={`${prefixCls}-cheked-content`}>
          <TreeChecked
            defaultExpandAll={true}
            placeholder={placeholder || '搜索选项'}
            data={selectedOptions}
            selectedKeys={leftSelectedKeys}
            onSelected={leftTreeOnSelected}
          />
        </div>
      </Card>
      <div className={`${prefixCls}-arrow-content`}>
        <Arrow click={() => transferClick('left')} style={{ transform: 'rotate(90deg)' }} />
        <Arrow click={() => transferClick('right')} style={{ transform: 'rotate(-90deg)' }} />
      </div>
      <Card
        bodyStyle={{ padding: 5 }}
        className={`${prefixCls}-card`}
        title={
          <div>
            {selectedAll && (
              <Checkbox
                indeterminate={selectAllChecked.right === CheckedStatus.Indeterminate}
                checked={selectAllChecked.right === CheckedStatus.AllChecked}
                onChange={selectAllCheckedChange}
              />
            )}
            <span style={{ marginLeft: 10 }}>
              {rightSelectedKeys.length}/{rightOpions.length}
            </span>
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
      </Card>
    </div>
  );
}

export default Transfer;
