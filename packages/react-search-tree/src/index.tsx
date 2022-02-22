import React, { useState, useEffect, useRef } from 'react';
import SearchTagInput, { DropContent, SearchTagInputOption } from './searchTagInput';
import TreeChecked from '@uiw/react-tree-checked';

type SelectOtpion = Record<string, string>;
const TreeCheckeds = (props: DropContent & { reff: any }) => {
  // const [selectOption, selectOptionSet] = useState<SelectOtpion>({})
  // const [keys, keysSet] = useState<Array<string>>()

  const {
    option: [selectOption, selectOptionSet],
    keys: [keys, keysSet],
  } = props.reff.current;
  console.log(',,,,,,,', keys);
  const onSelected = (_1: any, _2: any, isChecked: any, evn: any) => {
    let curSelectOption: SelectOtpion = {};
    curSelectOption = getOptionsRecursion([evn], selectOption, isChecked);
    selectOptionSet(curSelectOption);
    // const option = Object.entries(curSelectOption).map(([value, label]) => ({ value, label }))
    const keys: any = [];
    const option = Object.entries(curSelectOption).map(([value, label]) => {
      keys.push(value);
      return { value, label };
    });
    keysSet(keys);
    props.onSelected(option);
  };

  const getOptionsRecursion = (childrens: Array<any>, selectOption: SelectOtpion, isAdd: boolean) => {
    childrens.forEach((child: any) => {
      if (child?.children?.length > 0) {
        selectOption = getOptionsRecursion(child.children, selectOption, isAdd);
      } else if (isAdd) {
        selectOption[child.key] = child.label;
      } else {
        delete selectOption[child.key];
      }
    });
    return selectOption;
  };

  const data = [
    {
      label: '湖北省',
      key: '0-0-0',
      children: [
        {
          label: '武汉市',
          key: '0-1-0',
          children: [
            { label: '新洲区', key: '0-1-1', disabled: true },
            { label: '武昌区', key: '0-1-2' },
            {
              label: '汉南区',
              key: '0-1-3',
              children: [
                { label: '汉南区1', key: '0-1-3-1' },
                { label: '汉南区2', key: '0-1-3-2' },
                { label: '汉南区3', key: '0-1-3-3' },
              ],
            },
          ],
        },
        { label: '黄冈市', key: '0-2-0' },
        {
          label: '黄石市',
          key: '0-3-0',
          children: [
            { label: '青山区', key: '0-3-1' },
            { label: '黄陂区', key: '0-3-2' },
            { label: '青山区', key: '0-3-3' },
          ],
        },
      ],
    },
    {
      label: '上海市',
      key: '1-0-0',
      children: [
        { label: '黄浦区', key: '1-0-1' },
        { label: '卢湾区', key: '1-0-2' },
        {
          label: '徐汇区',
          key: '1-0-3',
          children: [
            { label: '半淞园路街道', key: '1-1-0' },
            { label: '南京东路街道', key: '1-2-0' },
            { label: '外滩街道', key: '1-3-0' },
          ],
        },
      ],
    },
    {
      label: '北京市',
      key: '2-0-0',
      children: [
        { label: '东城区', key: '2-1-0' },
        { label: '西城区', key: '2-2-0' },
        {
          label: '崇文区',
          key: '2-3-0',
          children: [
            { label: '东花市街道', key: '2-3-1' },
            { label: '体育馆路街道', key: '2-3-2' },
            { label: '前门街道', key: '2-3-3' },
          ],
        },
      ],
    },
    { label: '澳门', key: '3' },
  ];

  return <TreeChecked data={data} selectedKeys={keys} onSelected={onSelected} />;
};

function SearchTreeChecked(props: any) {
  const reff = useRef<any>();
  reff.current = {
    option: useState<SelectOtpion>({}),
    keys: useState<Array<string>>(),
  };

  const onChange = (resultValue: Array<SearchTagInputOption>) => {
    // console.log('resultVal--ue', resultValue)
    // props.onChange(resultValue)
  };

  return (
    <SearchTagInput
      onChange={onChange}
      content={
        <TreeCheckeds
          reff={reff}
          values={[]}
          onSelected={(option: any) => {
            console.log('------------------', option);
          }}
        />
      }
    />
  );
}

export default SearchTreeChecked;
