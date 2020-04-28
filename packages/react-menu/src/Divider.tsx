import React from 'react';
import classNames from 'classnames';
import { IProps, HTMLLiProps } from '@uiw/utils';

export interface DividerProps extends IProps, Omit<HTMLLiProps, 'title'> {
  title?: React.ReactNode;
}

export default class Divider extends React.Component<DividerProps> {
  static displayName = 'uiw.MenuDivider';
  public static defaultProps: DividerProps = {
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
