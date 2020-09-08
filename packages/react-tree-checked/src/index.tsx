import React, { Fragment } from 'react';
import Tree, {
  TreeProps,
  TreeRenderTitleNode,
  TreeData,
} from '@uiw/react-tree';
import Checkbox, { CheckboxProps } from '@uiw/react-checkbox';
import './style/index.less';

export interface TreeCheckedProps<T> extends TreeProps<T> {}

export default function TreeChecked<T>({
  prefixCls = 'w-treechecked',
  ...props
}: TreeCheckedProps<T>): JSX.Element {
  props.className = [prefixCls, props.className]
    .filter(Boolean)
    .join(' ')
    .trim();
  props.checkStrictly = true;
  props.isSelected = false;
  props.multiple = true;
  return (
    <Tree
      renderTitle={(item: TreeData, node: TreeRenderTitleNode<T>) => {
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
