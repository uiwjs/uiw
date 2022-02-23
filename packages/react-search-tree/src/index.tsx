import React, { useState, useEffect, useRef } from 'react';
import SearchTagInput, { DropContent, SearchTagInputOption } from './searchTagInput';
import { TreeData } from '@uiw/react-tree';
import TreeChecked, { TreeCheckedProps } from '@uiw/react-tree-checked';

type SelectOtpion = Record<string, string>;

// type TreeCheckedsProps = TreeCheckedProps & Partial<DropContent<SearchTagInputOption>>
function TreeCheckeds<V extends SearchTagInputOption>(
  props: Omit<TreeCheckedProps, 'onSelected'> & Partial<DropContent<V>>,
) {
  const [selectOption, selectOptionSet] = useState<SelectOtpion>({});
  const [keys, keysSet] = useState<Array<string | number>>([]);

  useEffect(() => {
    let selectOption: SelectOtpion = {};
    const keys = props.values?.map((opt) => {
      selectOption[opt.value] = opt.label;
      return opt.value;
    });
    selectOptionSet(selectOption);
    keysSet(keys || []);
  }, [props.values]);

  const onSelected = (_1: any, _2: any, isChecked: boolean, evn: TreeData) => {
    const curSelectOption: SelectOtpion = getOptionsRecursion([evn], selectOption, isChecked);
    const option = Object.entries(curSelectOption).map(([value, label]) => ({ value, label } as V));
    props.onSelected?.(option, { value: evn.key, label: evn.label as string } as V, isChecked);
  };

  const getOptionsRecursion = (childrens: TreeData[], selectOption: SelectOtpion, isAdd: boolean) => {
    childrens.forEach((child: TreeData) => {
      if (!!child.children?.length) {
        selectOption = getOptionsRecursion(child.children, selectOption, isAdd);
      } else if (isAdd) {
        selectOption[child.key!] = child.label?.toString()!;
      } else {
        delete selectOption[child.key!];
      }
    });
    return selectOption;
  };

  return <TreeChecked {...props} data={props.options} selectedKeys={keys} onSelected={onSelected} />;
}

export interface SearchTreeProps<V> {
  onChange?: (selectedAll: Array<V>, selectd: V, isChecked: boolean) => void;
  onSearch?: (seachValue: string) => void;
  value?: Array<V>;
  options?: TreeData[];
  treeProps?: Omit<TreeCheckedProps, 'onSelected'> & Partial<DropContent<V>>;
}

function SearchTree<V extends SearchTagInputOption>(props: SearchTreeProps<V>) {
  const { onChange, onSearch, options = [], value = [], treeProps, ...other } = props;
  const [selectedValues, selectedValuesSet] = useState<Array<V>>(value);

  const selectedChange = (resultValue: Array<V>, cur: V, isChecked: boolean) => {
    selectedValuesSet(resultValue);
    onChange?.(resultValue, cur, isChecked);
  };

  return (
    <SearchTagInput
      {...other}
      onChange={selectedChange}
      values={selectedValues}
      content={<TreeCheckeds {...treeProps} options={options} />}
    />
  );
}

export default SearchTree;
