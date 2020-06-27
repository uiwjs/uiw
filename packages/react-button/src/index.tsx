import React from 'react';
import classnames from 'classnames';
import Icon from '@uiw/react-icon';
import { IProps, HTMLButtonProps } from '@uiw/utils';
import './style/index.less';

export type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'link';
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps extends IProps, Omit<HTMLButtonProps, 'size'> {
  basic?: boolean;
  disabled?: boolean;
  active?: boolean;
  loading?: boolean;
  block?: boolean;
  icon?: JSX.Element | string | false | null;
  type?: ButtonType;
  size?: ButtonSize;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement> & MouseEvent) => void;
}

export default (props: ButtonProps = {}) => {
  const {
    prefixCls = 'w-btn',
    disabled = false,
    active = false,
    loading = false,
    block = false,
    basic = false,
    htmlType = 'button',
    type = 'light',
    size = 'default',
    icon,
    className,
    children,
    ...others
  } = props;
  const cls: string = classnames(className, prefixCls, {
    [`${prefixCls}-size-${size}`]: size,
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-basic`]: basic,
    [`${prefixCls}-loading`]: loading, // 加载
    disabled: disabled || loading, // 禁用状态
    active, // 激活状态
    block, // 块级元素Block level
  });
  return (
    <button
      {...others}
      type={htmlType}
      disabled={disabled || loading}
      className={cls}
    >
      {icon && <Icon type={icon} />}
      {children &&
        React.Children.map(children, (child: React.ReactNode) => {
          if (!child) return child;
          if (React.isValidElement(child)) return child;
          return <span>{child}</span>;
        })}
    </button>
  );
};
