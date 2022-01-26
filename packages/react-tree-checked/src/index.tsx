import React, { Fragment } from 'react';
import Tree, { TreeProps, TreeRenderTitleNode, TreeData } from '@uiw/react-tree';
import Checkbox, { CheckboxProps } from '@uiw/react-checkbox';
import './style/index.less';

export interface TreeCheckedProps extends TreeProps {}

export default function TreeChecked({ prefixCls = 'w-treechecked', ...props }: TreeCheckedProps): JSX.Element {
  props.className = [prefixCls, props.className].filter(Boolean).join(' ').trim();
  props.checkStrictly = true;
  props.isSelected = false;
  props.multiple = true;
  return (
    <Tree
      renderTitle={(item: TreeData, node: TreeRenderTitleNode) => {
        const checkedProps: CheckboxProps = {};
        if (node.isHalfChecked) {
          checkedProps.indeterminate = true;
        }
        if (node.selected) {
          checkedProps.checked = true;
        } else {
          checkedProps.checked = false;
        }
        return (
          <Fragment>
            <Checkbox className={`${prefixCls}-checked`} {...checkedProps} />
            {item.label && <span>{item.label}</span>}
          </Fragment>
        );
      }}
      {...props}
    />
  );
}
