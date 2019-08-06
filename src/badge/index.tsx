import React from 'react';
import classnames from 'classnames';
import { HTMLSpanProps } from '../utils/props';
import './style/index.less';

export interface IBadgeProps extends HTMLSpanProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  color?: string;
  dot?: boolean;
  processing?: boolean;
  max?: number;
  count?: number;
}

export default class Badge extends React.Component<IBadgeProps> {
  public static defaultProps: IBadgeProps = {
    prefixCls: 'w-badge',
    dot: false,
    processing: false,
    max: 99,
  }
  render() {
    const { prefixCls, className, style, color, max, dot, processing, count, children, ...other } = this.props;
    const supProps = {
      className: classnames({ [`${prefixCls}-count`]: !dot, dot }),
      style: {},
    };
    const warpperProps = {
      ...other,
      className: classnames(className, `${prefixCls}`, {
        nowrap: !children,
        [`${prefixCls}-status`]: !children,
        [`${prefixCls}-processing`]: processing,
      }),
      style: {},
    };
    if (count || count === 0) {
      supProps.style = { backgroundColor: color, ...style };
    } else {
      warpperProps.style = style || {};
    }
    return (
      <span {...warpperProps}>
        {color && (<span className={`${prefixCls}-dot`} style={{ backgroundColor: color }} />)}
        {children}
        {count !== 0 && !color &&
          <sup {...supProps}>
          {!dot && count && max && count > max ? `${max}+` : count}
          </sup>
        }
      </span>
    );
  }
}
