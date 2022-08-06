import React from 'react';
import { IProps, HTMLDivProps, noop } from '@uiw/utils';
import { ListItem } from './Item';
import ListWarp, { ListStyleFooter, ListStyleHeader } from './style';
export * from './Item';
export * from './style';

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

function InternalList<T>(props: ListProps<T>, ref: React.ForwardedRef<HTMLDivElement>) {
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
    items = dataSource.map((item: any, index: number) => renderItem!(item, index)) as React.ReactNode;
  } else {
    items = children;
  }
  let childrenList = React.Children.map(
    items,
    (child: React.ReactNode, index) =>
      React.isValidElement(child) &&
      React.cloneElement(child, {
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
    <ListWarp
      className={classString}
      {...resetProps}
      ref={ref}
      striped={striped}
      noHover={noHover}
      active={active}
      bordered={bordered}
      size={size}
    >
      {header && <ListStyleHeader className={`${prefixCls}-header`}>{header}</ListStyleHeader>}
      {childrenList}
      {footer && <ListStyleFooter className={`${prefixCls}-footer`}>{footer}</ListStyleFooter>}
    </ListWarp>
  );
}

const List = React.forwardRef<HTMLDivElement, ListProps<any>>(InternalList);
type List = typeof List & {
  Item: typeof ListItem;
};

(List as List).Item = ListItem;

export default List as List;
