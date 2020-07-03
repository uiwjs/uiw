import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLSpanProps } from '@uiw/utils';
import './style/index.less';

export interface BadgeProps extends IProps, HTMLSpanProps {
  color?: string;
  dot?: boolean;
  processing?: boolean;
  max?: number;
  count?: number;
}

export default (props: BadgeProps = {}) => {
  const {
    prefixCls = 'w-badge',
    className,
    style = {},
    color,
    max = 99,
    dot = false,
    processing = false,
    count,
    children,
    ...other
  } = props;
  const supProps = {
    className: classnames({ [`${prefixCls}-count`]: !dot, dot }),
    style: {},
  };
  const cls = classnames(className, `${prefixCls}`, {
    nowrap: !children,
    [`${prefixCls}-status`]: !children,
    [`${prefixCls}-processing`]: processing,
  });

  const warpperProps: HTMLSpanProps = {};
  if (count || count === 0) {
    supProps.style = { backgroundColor: color, ...style };
  } else {
    warpperProps.style = style || {};
  }
  return (
    <span className={cls} {...other} {...warpperProps}>
      {color && (
        <span
          className={`${prefixCls}-dot`}
          style={{ backgroundColor: color }}
        />
      )}
      {children}
      {count !== 0 && !color && (
        <sup {...supProps}>
          {!dot && count && max && count > max ? `${max}+` : count}
        </sup>
      )}
    </span>
  );
};
