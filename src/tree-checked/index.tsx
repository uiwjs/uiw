import React, { Fragment } from 'react';
import classnames from 'classnames'
import Tree, { TreeProps, RenderTitleNode, TreeData } from '../tree';
import Checkbox, { CheckboxProps } from '../checkbox/Checkbox';
import './style/index.less';

export interface TreeCheckedProps<T> extends TreeProps<T> {};

export default function TreeChecked<T>({ prefixCls = 'w-treechecked', ...props }: TreeCheckedProps<T>): JSX.Element {
  props.className = classnames(prefixCls, props.className);
  props.checkStrictly = true;
  props.isSelected = false;
  props.multiple = true;
  return (
    <Tree
      renderTitle={(item: TreeData, node: RenderTitleNode<T>) => {
        const checkedProps: CheckboxProps = {};
        if(node.isHalfChecked) {
          checkedProps.indeterminate = true;
        }
        if (node.selected) {
          checkedProps.checked = true;
        } else {
          checkedProps.checked = false;
        }
        return (
          <Fragment>
            <Checkbox className={`${prefixCls}-checked`} {...checkedProps}/>
            {item.label && <span>{item.label}</span>}
          </Fragment>
        )
      }}
      {...props}
    />
  );
}
