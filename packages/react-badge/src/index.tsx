import React from 'react';
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
    className: [!dot ? `${prefixCls}-count` : null, dot ? 'dot' : null]
      .filter(Boolean)
      .join(' ')
      .trim(),
    style: {},
  };
  const cls = [
    className,
    prefixCls,
    !children ? 'nowrap' : null,
    !children ? `${prefixCls}-status` : null,
    processing ? `${prefixCls}-processing` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

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
