import React from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/col.less';

export interface ColProps extends IProps, HTMLDivProps {
  fixed?: boolean;
  span?: number | string;
  grow?: number | string;
  align?: 'top' | 'middle' | 'bottom' | 'baseline';
}

export function Col(props: ColProps = {}) {
  const {
    prefixCls = 'w-col',
    className,
    fixed,
    span,
    grow,
    align,
    ...other
  } = props;
  const cls = [
    prefixCls,
    className,
    span ? `${prefixCls}-${span}` : null,
    fixed ? `${prefixCls}-fixed` : null,
    align ? `${prefixCls}-align-${align}` : null,
    fixed ? `${prefixCls}-grow-${grow}` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <div className={cls} {...other}>
      {props.children}
    </div>
  );
}
