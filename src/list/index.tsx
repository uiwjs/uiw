import React from 'react';
import classnames from 'classnames';
import Item from './Item';
import { IProps, HTMLDivProps } from '../utils/props';
import './style/index.less';

export interface IListProps<T> extends IProps, HTMLDivProps {
  bordered?: boolean;
  striped?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'default' | 'large';
  renderItem?: (item: any, idx: number) => React.ReactNode;
  dataSource?: T[];
}

export default class List<T> extends React.Component<IListProps<T>> {
  public static defaultProps = {
    prefixCls: 'w-list',
    bordered: true,
    striped: false,
    size: 'default',
    renderItem: () => null,
    dataSource: [],
  }
  static Item = Item;
  render() {
    const { prefixCls, className, children, bordered, striped, header, footer, size, dataSource, renderItem, ...resetProps } = this.props;
    let items: React.ReactNode;
    if (dataSource && dataSource.length > 0) {
      items = dataSource.map((item: any, index: number) => renderItem!(item, index));
    } else {
      items = children;
    }
    let childrenList = React.Children.map(items, (child: React.ReactNode, index) => (
      React.isValidElement(child) && React.cloneElement((child as React.ReactElement), {
        key: index,
      })
    ));
    const classString = classnames(`${prefixCls}`, className, {
      [`${prefixCls}-striped`]: striped,
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-size-${size}`]: size && size !== 'default',
    });
    return (
      <div className={classString} {...resetProps}>
        {header && <div className={`${prefixCls}-header`}>{header}</div>}
        {childrenList}
        {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
      </div>
    );
  }
}
