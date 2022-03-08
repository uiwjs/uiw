import React, { useState, useEffect } from 'react';
import SearchTagInput, { DropContent, SearchTagInputOption } from './SearchTagInput';
import Tree, { TreeData, TreeProps } from '@uiw/react-tree';
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
      selectOption[opt.key] = opt.label;
      return opt.key;
    });
    selectOptionSet(selectOption);
    keysSet(keys || []);
  }, [props.values]);

  const onSelected = (_1: any, _2: any, isChecked: boolean, evn: TreeData) => {
    const curSelectOption: SelectOtpion = getOptionsRecursion([evn], selectOption, isChecked);
    const option = Object.entries(curSelectOption).map(([key, label]) => ({ key, label } as V));
    props.onSelected?.(option, { key: evn.key, label: evn.label as string } as V, isChecked);
  };

  const getOptionsRecursion = (childrens: TreeData[], selectOption: SelectOtpion, isAdd: boolean) => {
    const addOrDel = (key: string | number, label: string, isAdd: boolean) => {
      if (isAdd) {
        selectOption[key] = label;
      } else {
        delete selectOption[key!];
      }
    };
    const iteratorParent = (child: TreeData) => {
      // 向上迭代
      if (child.parent) {
        const selectCount = child.parent.children.filter((child: TreeData) => !selectOption[child.key!]).length;
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

  return (
    <TreeChecked defaultExpandAll={true} {...props} data={props.options} selectedKeys={keys} onSelected={onSelected} />
  );
}

function SingeTree<V extends SearchTagInputOption>(props: Omit<TreeProps, 'onSelected'> & Partial<DropContent<V>>) {
  const [keys, keysSet] = useState<Array<string | number>>([]);

  useEffect(() => {
    const keys: Array<string | number> = [];
    if (props.values?.length) keys[0] = props.values[0].key;
    keysSet(keys);
  }, [props.values]);

  const onSelected = (_1: any, _2: any, isChecked: boolean, evn: TreeData) => {
    const { key, label } = evn;
    const cur = { key, label } as V;
    props.onSelected?.(isChecked ? [cur] : [], cur, isChecked);
  };

  return (
    <Tree
      defaultExpandAll={true}
      {...props}
      multiple={false}
      data={props.options}
      selectedKeys={keys}
      onSelected={onSelected}
    />
  );
}

export interface SearchTreeProps<V> {
  onChange?: (selectd: V, selectedAll: Array<V>, isChecked: boolean) => void;
  onSearch?: (seachValue: string) => void;
  value?: Array<V>;
  options?: TreeData[];
  treeProps?: Omit<TreeCheckedProps, 'onSelected'> & Partial<DropContent<V>>;
  emptyOption?: React.ReactNode;
  multiple?: boolean;
}

function SearchTree<V extends SearchTagInputOption>(props: SearchTreeProps<V>) {
  const {
    onChange,
    onSearch,
    multiple = true,
    options = [],
    value = [],
    emptyOption = !options.length,
    treeProps,
    ...other
  } = props;
  const [selectedValues, selectedValuesSet] = useState<Array<V>>(Array.isArray(value) ? value : [value]);
  const [selectedOptions, selectedOptionSet] = useState<Array<TreeData>>(options);
  const [isEmpty, isEmptySet] = useState(emptyOption);

  useEffect(() => {
    selectedValuesSet(Array.isArray(value) ? value : []);
  }, [JSON.stringify(value)]);

  const selectedChange = (resultValue: Array<V>, cur: V, isChecked: boolean) => {
    selectedValuesSet(resultValue);
    onChange?.(cur, resultValue, isChecked);
  };

  // 防抖
  const debounce = (fn: Function, ms: number) => {
    let timeoutId: NodeJS.Timeout;
    return (searchValue: string) => {
      onSearch?.(searchValue);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(searchValue);
      }, ms);
    };
  };

  const selectedSearch = (searchValue: string) => {
    const hiddenNodeForSeach = (childrens: TreeData[], parentIsHide: boolean = true) => {
      childrens.forEach((child: TreeData) => {
        const isHide = !(child.label as string).includes(searchValue.trim()) && parentIsHide;
        if (!!child.children?.length) {
          hiddenNodeForSeach(child.children, isHide);
          const find = child.children.find((item) => !item.hideNode);
          child.hideNode = isHide && !find;
        } else {
          child.hideNode = isHide;
        }
      });
    };
    hiddenNodeForSeach(options);
    selectedOptionSet([...options]);

    let isEmpt = true;
    options.forEach((opt) => (isEmpt = isEmpt && !!opt.hideNode));
    isEmptySet(isEmpt);
  };

  return (
    <SearchTagInput
      {...other}
      emptyOption={isEmpty}
      selectCloseDrop={!multiple}
      // onSearch={debounce(selectedSearch, 300)}
      onSearch={selectedSearch}
      onChange={selectedChange}
      values={selectedValues}
      options={selectedOptions}
      content={multiple ? <TreeCheckeds {...treeProps} /> : <SingeTree {...treeProps} />}
    />
  );
}

export default SearchTree;
