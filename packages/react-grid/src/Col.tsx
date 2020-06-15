import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/col.less';

export interface ColProps extends IProps, HTMLDivProps {
  fixed?: boolean;
  span?: number | string;
  grow?: number | string;
  align?: 'top' | 'middle' | 'bottom' | 'baseline';
}

export function Col(props: ColProps = {}) {
  const { prefixCls = 'w-col', className, fixed, span, grow, align, ...other } = props;
  const cls = classnames(prefixCls, className, {
    [`${prefixCls}-${span}`]: span,
    [`${prefixCls}-fixed`]: fixed,
    [`${prefixCls}-align-${align}`]: align,
    [`${prefixCls}-grow-${grow}`]: grow,
  });
  return (
    <div className={cls} {...other}>
      {props.children}
    </div>
  );
}
