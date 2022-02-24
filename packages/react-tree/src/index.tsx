import React, { useEffect, useState } from 'react';
import { IconProps } from '@uiw/react-icon';
import { IProps, HTMLDivProps, noop } from '@uiw/utils';
import TreeNode from './TreeNode';
import './style/index.less';

export type TreeRenderTitleNode = {
  selected?: boolean;
  noChild?: boolean;
  isHalfChecked?: boolean;
  openKeys?: TreeProps['openKeys'];
  selectedKeys?: TreeProps['selectedKeys'];
};

export interface TreeProps extends IProps, HTMLDivProps {
  icon?: IconProps['type'];
  data?: TreeData[];
  openKeys?: TreeData['key'][];
  selectedKeys?: TreeData['key'][];
  defaultExpandAll?: boolean;
  /**
   * 是否自动展开父节点
   */
  autoExpandParent?: boolean;
  /**
   * 是否展示连接线
   */
  showLine?: boolean;
  iconAnimation?: boolean;
  isSelected?: boolean;
  /**
   * 子节点受父节点控制设置 `true`，需要配合 `multiple` 参数使用。
   */
  checkStrictly?: boolean;
  /**
   * 支持点选多个节点
   */
  multiple?: boolean;
  renderTitle?: (item: TreeData, node: TreeRenderTitleNode) => React.ReactElement;
  onExpand?: (key: TreeData['key'], expanded: boolean, item: TreeData, evn: React.MouseEvent<HTMLElement>) => void;
  onSelected?: (
    keys: TreeData['key'][],
    key: TreeData['key'],
    selected: boolean,
    item: TreeData,
    evn: React.MouseEvent<HTMLElement>,
  ) => void;
}

export interface TreeData {
  label?: React.ReactNode;
  children?: TreeData[];
  hideNode?: boolean;
  key?: string | number;
  [keyName: string]: any;
}

/**
 * a contains b
 * @param {Array} a
 * @param {Array} b
 */
const isContained = (a: any[], b: any[]) => {
  if (!(a instanceof Array) || !(b instanceof Array)) return false;
  if (a.length < b.length) return false;
  const aStr = a.toString();
  for (let i = 0, len = b.length; i < len; i += 1) {
    if (aStr.indexOf(b[i]) === -1) return false;
  }
  return true;
};

export const getChildKeys = (
  childs: TreeData[] = [],
  result: TreeData['key'][] = [],
  depth?: number,
): TreeData['key'][] => {
  childs.forEach((item) => {
    result.push(item.key as string | number);
    if (typeof depth === 'number' && !(depth - 1)) return;

    if (item.children && item.children.length > 0) {
      result = result.concat(getChildKeys(item.children, undefined, depth ? depth - 1 : undefined));
    }
  });
  return result;
};

const getParentKeys = (childs: TreeData = {}, result: TreeData['key'][] = []) => {
  if (childs.key) {
    result.push(childs.key);
  }
  if (childs.parent) {
    result = getParentKeys(childs.parent, result);
  }
  return result;
};

const getParentSelectKeys = (
  childs: TreeData = {},
  selectedKeys: TreeData['key'][] = [],
  result: TreeData['key'][] = [],
) => {
  if (childs.key && childs.children && isContained(selectedKeys, getChildKeys(childs.children))) {
    result.push(childs.key);
    if (childs.parent && !childs.parent.parent) {
      if (isContained(selectedKeys, getChildKeys(childs.children))) {
        selectedKeys = selectedKeys.concat(result);
      }
      if (isContained(selectedKeys, getChildKeys(childs.parent.children))) {
        result.push(childs.parent.key);
      }
    }
  }
  if (childs.parent) {
    result = getParentSelectKeys(childs.parent, selectedKeys, result);
  }
  return result;
};

export default function Tree(props: TreeProps) {
  const {
    prefixCls = 'w-tree',
    icon = 'caret-right',
    data = [],
    openKeys = [],
    selectedKeys = [],
    defaultExpandAll = false,
    showLine = false,
    iconAnimation = true,
    isSelected = true,
    checkStrictly = false,
    multiple = false,
    onExpand = noop,
    onSelected = noop,

    className,
    autoExpandParent = true,
    renderTitle,
    ...elementProps
  } = props;

  const [curOpenKeys, setCurOpenKeys] = useState(openKeys);
  const [curSelectedKeys, setCurSelectedKeys] = useState(selectedKeys);

  useEffect(() => {
    setCurSelectedKeys(props.selectedKeys!);
  }, [JSON.stringify(props.selectedKeys)]);

  // useEffect(() => setCurOpenKeys(openKeys), [openKeys]);
  // useEffect(() => setCurSelectedKeys(selectedKeys), [selectedKeys]);

  useEffect(() => {
    let arrOpenKeys: TreeData['key'][] = [];
    if (defaultExpandAll) {
      arrOpenKeys = getChildKeys(data);
    } else if (autoExpandParent) {
      arrOpenKeys = getChildKeys(data, undefined, 1);
    }
    setCurOpenKeys(arrOpenKeys);
  }, []);

  const cls = [className, prefixCls, showLine ? `${prefixCls}-line` : null].filter(Boolean).join(' ').trim();

  function onItemClick(item: TreeData, evn: React.MouseEvent<HTMLElement>) {
    if (!item.children) {
      return;
    }
    // const { onExpand } = this.props;
    // const { openKeys } = this.state;
    let currentKeys = [...(curOpenKeys as TreeData['key'][])];
    const key = currentKeys.find((v) => v === item.key);
    const cls = evn.currentTarget.className.replace(/(\s)open/g, '');
    let expanded = false;
    if (!key && item.key) {
      currentKeys.push(item.key);
      evn.currentTarget.className = [cls, 'open'].filter(Boolean).join(' ').trim();
      expanded = true;
    } else {
      currentKeys = currentKeys.filter((v) => v !== item.key);
      evn.currentTarget.className = cls;
    }
    setCurOpenKeys(currentKeys);
    onExpand && onExpand(item.key, expanded, item, evn);
  }
  function onItemSelected(item: TreeData, evn: React.MouseEvent<HTMLElement>) {
    // const { onSelected, multiple, checkStrictly } = this.props;
    let selKeys = [...(curSelectedKeys as TreeData['key'][])];
    const findKey = selKeys.find((v) => v === item.key);
    let selected = false;
    if (!findKey) {
      selected = true;
      selKeys.push(item.key);
    } else {
      selKeys = selKeys.filter((v) => v !== item.key);
    }
    if (checkStrictly) {
      if (!findKey) {
        selKeys = selKeys.concat(getChildKeys(item.children).filter((val) => selKeys.indexOf(val) === -1));
        selKeys = selKeys.concat(getParentSelectKeys(item, selKeys));
        selKeys = Array.from(new Set(selKeys)); // Remove duplicates.
      } else {
        selKeys = selKeys.filter((val) => getChildKeys(item.children).indexOf(val) === -1);
        selKeys = selKeys.filter((val) => getParentKeys(item.parent).indexOf(val) === -1);
      }
    }
    if (!multiple) {
      selKeys = !findKey ? [item.key] : [];
    }
    setCurSelectedKeys(selKeys);
    onSelected && onSelected(selKeys, item.key, selected, item, evn);
  }
  return (
    <div className={cls} {...elementProps}>
      <TreeNode
        {...{
          icon,
          iconAnimation,
          isSelected,
          openKeys: curOpenKeys,
          selectedKeys: curSelectedKeys,
          prefixCls,
          renderTitle,
        }}
        onItemClick={onItemClick}
        onItemSelected={onItemSelected}
        data={data}
        level={1}
      />
    </div>
  );
}
