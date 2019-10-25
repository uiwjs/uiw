import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '../utils/props'
import './style/index.less';

export interface DividerProps extends IProps, HTMLDivProps {
  dashed?: boolean;
  type?: 'horizontal' | 'vertical';
  align?: 'left' | 'right' | 'center';
}

export default class Divider extends React.PureComponent<DividerProps> {
  public static defaultProps = {
    prefixCls: 'w-divider',
    type: 'horizontal',
    align: 'center',
    dashed: false,
  }
  public render() {
    const { prefixCls, className, children, dashed, type, align, ...restProps } = this.props;
    const cls = classnames(className, prefixCls, `${prefixCls}-${type}`, `${prefixCls}-${align}`, {
      [`${prefixCls}-with-text`]: children,
      [`${prefixCls}-dashed`]: !!dashed,
    });
    return (
      <div className={cls} {...restProps}>
        {children && <span className={`${prefixCls}-inner-text`}>{children}</span>}
      </div>
    );
  }
}
