import React from 'react';
import classNames from 'classnames';
import { IProps, HTMLLiProps } from '@uiw/utils';

export interface MenuDividerProps extends IProps, Omit<HTMLLiProps, 'title'> {
  title?: React.ReactNode;
}

export default class Divider extends React.Component<MenuDividerProps> {
  static displayName = 'uiw.MenuDivider';
  public static defaultProps: MenuDividerProps = {
    prefixCls: 'w-menu-divider',
  }
  public render() {
    const { prefixCls, className, title, ...htmlProps } = this.props;
    const cls = classNames(prefixCls, className);
    if (!title) {
      return <li {...htmlProps} className={cls} />;
    }
    return (
      <li {...htmlProps} className={cls} data-menu="divider">
        <strong>{title}</strong>
      </li>
    );
  }
}
