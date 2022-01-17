import React from 'react';
import Icon, { IconProps } from '@uiw/react-icon';
import { IProps, HTMLButtonProps } from '@uiw/utils';
import './style/index.less';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps extends IProps, Omit<HTMLButtonProps, 'size'> {
  basic?: boolean;
  disabled?: boolean;
  active?: boolean;
  loading?: boolean;
  block?: boolean;
  icon?: IconProps['type'];
  type?: ButtonType;
  size?: ButtonSize;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement> & MouseEvent) => void;
}

export default React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
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
  const cls = [
    className,
    prefixCls,
    size ? `${prefixCls}-size-${size}` : null,
    type ? `${prefixCls}-${type}` : null,
    basic ? `${prefixCls}-basic` : null,
    loading ? `${prefixCls}-loading` : null,
    disabled || loading ? 'disabled' : null,
    active ? 'active' : null,
    block ? 'block' : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <button {...others} ref={ref} type={htmlType} disabled={disabled || loading} className={cls}>
      {icon && <Icon type={icon} />}
      {children &&
        React.Children.map(children, (child: React.ReactNode) => {
          if (!child) return child;
          if (React.isValidElement(child)) return child;
          return <span>{child}</span>;
        })}
    </button>
  );
});
