import React, { useEffect, useState } from 'react';
import { IProps } from '@uiw/utils';
import Card from '@uiw/react-card';
import Icon from '@uiw/react-icon';
import Input from '@uiw/react-Input';
import TreeChecked from '@uiw/react-tree-checked';
import { TreeData } from '@uiw/react-tree';
import './style/index.less';

export interface TransferOptionType {
  key: string | number;
  label: string;
}

interface TransferProps extends IProps {
  placeholder?: string;
  bodyStyle?: React.CSSProperties;

  onChange?: (transfer: string, selectedAll: Array<TransferOptionType>) => void;
  onSearch?: (seachValue: string) => void;
  showSearch?: boolean;
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

    bodyStyle,
    style,
    className,
    prefixCls = 'w-transfer',
  } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();

  const [searchValueLeft, searchValueLeftSet] = useState('');
  const [searchValueRight, searchValueRightSet] = useState('');
  const [selectedOptions, selectedOptionSet] = useState<Array<TreeData>>(options || []);
  const [selectOption, selectOptionSet] = useState<Map<string | number, string>>(new Map());
  const [leftSelectedKeys, leftSelectedKeySet] = useState<Array<string | number | undefined>>([]);
  const [rightSelectedKeys, rightSelectedKeySet] = useState<Array<string | number | undefined>>([]);
  const [rightOpions, rightOpionSet] = useState<Array<TransferOptionType>>([]);

  useEffect(() => {
    leftSelectedKeySet([]);
    rightSelectedKeySet([]);

    rightOpionSet(value || []);
    value?.forEach((selectd) => selectOption.set(selectd.key, selectd.label));
    hiddenNode((child) => !!value?.find((selectd) => child.key === selectd.key));
  }, [JSON.stringify(value)]);

  const hiddenNode = (callBackfn: (child: TreeData) => boolean) => {
    const hiddenNodeForSeach = (childrens: TreeData[]) => {
      childrens.forEach((child: TreeData) => {
        const isHide = callBackfn(child); // && parentIsHide;
        if (!!child.children?.length) {
          hiddenNodeForSeach(child.children);
          const find = child.children.find((item) => !item.hideNode);
          child.hideNode = isHide && !find;
        } else {
          child.hideNode = isHide;
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
    leftSelectedKeySet(selectedKeys);
    const selectOptionTemp = getOptionsRecursion([evn], selectOption, isChecked);
    selectOptionSet(selectOptionTemp);
  };

  const rightTreeOnSelected = (
    selectedKeys: Array<string | number | undefined>,
    _1: any,
    isChecked: boolean,
    evn: TreeData,
  ) => {
    rightSelectedKeySet(selectedKeys);
    selectedKeys.forEach((key) => {
      selectOption.delete(key!);
    });
    selectOptionSet(selectOption);
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
      // 向上迭代
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
    const option: Array<TransferOptionType> = [];
    selectOption.forEach((label, key) => option.push({ key, label }));
    props.onChange?.(transferType, option);
  };

  const searchValueLeftChange = (vlaue: string) => {
    searchValueLeftSet(vlaue);
  };

  const searchValueRightChange = (vlaue: string) => {
    searchValueRightSet(vlaue);
  };

  return (
    <div className={cls} style={{ width: 400, ...style }}>
      <Card
        bodyStyle={{ padding: '5px 0px 5px 5px' }}
        title={`${leftSelectedKeys.length}/${selectedOptions.length}`}
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
            placeholder={placeholder || '搜索选项'}
            data={selectedOptions}
            selectedKeys={leftSelectedKeys}
            onSelected={leftTreeOnSelected}
          />
        </div>
      </Card>
      <div className={`${prefixCls}-arrow-content`}>
        <Icon
          onClick={() => transferClick('left')}
          type="down-square-o"
          className={`${prefixCls}-arrow-left`}
          style={{ transform: 'rotate(-90deg)', fontSize: 20 }}
        />
        <Icon
          onClick={() => transferClick('right')}
          type="down-square-o"
          className={`${prefixCls}-arrow-right`}
          style={{ transform: 'rotate(90deg)', fontSize: 20 }}
        />
      </div>
      <Card
        bodyStyle={{ padding: '5px 0px 5px 0px' }}
        className={`${prefixCls}-card`}
        title={`${rightSelectedKeys.length}/${rightOpions.length}`}
      >
        {showSearch && (
          <Input
            placeholder={placeholder || '搜索选项'}
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
