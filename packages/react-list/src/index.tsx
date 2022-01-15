import React from 'react';
import { IProps, HTMLDivProps, noop } from '@uiw/utils';
import Item from './Item';
import './style/index.less';

export * from './Item';

export interface ListProps<T> extends IProps, HTMLDivProps {
  bordered?: boolean;
  striped?: boolean;
  noHover?: boolean;
  active?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'default' | 'large';
  renderItem?: (item: any, idx: number) => React.ReactNode;
  dataSource?: T[];
}

function InternalList<T>(
  props: ListProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const {
    prefixCls = 'w-list',
    bordered = true,
    striped = false,
    noHover = false,
    active = false,
    size = 'default',
    renderItem = noop,
    className,
    children,
    header,
    footer,
    dataSource = [],
    ...resetProps
  } = props;
  let items: React.ReactNode;
  if (dataSource && dataSource.length > 0) {
    items = dataSource.map((item: any, index: number) =>
      renderItem!(item, index),
    );
  } else {
    items = children;
  }
  let childrenList = React.Children.map(
    items,
    (child: React.ReactNode, index) =>
      React.isValidElement(child) &&
      React.cloneElement(child as React.ReactElement, {
        key: index,
      }),
  );
  const classString = [
    prefixCls,
    className,
    striped ? `${prefixCls}-striped` : null,
    noHover ? `${prefixCls}-no-hover` : null,
    active ? `${prefixCls}-active` : null,
    bordered ? `${prefixCls}-bordered` : null,
    size && size !== 'default' ? `${prefixCls}-size-${size}` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <div className={classString} {...resetProps} ref={ref}>
      {header && <div className={`${prefixCls}-header`}>{header}</div>}
      {childrenList}
      {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
    </div>
  );
}

const List = React.forwardRef<HTMLDivElement, ListProps<any>>(InternalList);
type List = typeof List & {
  Item: typeof Item;
};

(List as List).Item = Item;

export default List as List;
