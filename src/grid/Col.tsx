import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '../utils/props';
import './style/col.less';

export interface ColProps extends IProps, HTMLDivProps {
  fixed?: boolean;
  span?: number;
  grow?: number;
  align?: 'top' | 'middle' | 'bottom' | 'baseline';
}

export default class Col extends React.Component<ColProps> {
  static defaultProps = {
    prefixCls: 'w-col',
  }
  render() {
    const { prefixCls, className, fixed, span, grow, align, ...props } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-${span}`]: span,
      [`${prefixCls}-fixed`]: fixed,
      [`${prefixCls}-align-${align}`]: align,
      [`${prefixCls}-grow-${grow}`]: grow,
    });
    return (
      <div className={cls} {...props}>
        {this.props.children}
      </div>
    );
  }
}
