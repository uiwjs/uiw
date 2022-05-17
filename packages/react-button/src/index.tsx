import React from 'react';
import { IProps, HTMLButtonProps } from '@uiw/utils';
import Buttons from './style';
// import './style/index.less';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps extends IProps, Omit<HTMLButtonProps, 'size'> {
  basic?: boolean;
  disabled?: boolean;
  active?: boolean;
  loading?: boolean;
  block?: boolean;
  icon?: React.ReactNode;
  /**
   * 按钮类型
   * @mytag {@link link }
   * @beta
   */
  type?: ButtonType;
  /**
   * 按钮尺寸
   * @defaultValue 'large' | 'default' | 'small'
   */
  size?: ButtonSize;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement> & MouseEvent) => void;
}

/**@internal */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
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
    <Buttons {...(props as any)} ref={ref} disabled={disabled || loading} className={cls}>
      {icon}
      {children &&
        React.Children.map(children, (child: React.ReactNode) => {
          if (!child) return child;
          if (React.isValidElement(child)) return child;
          return <span>{child}</span>;
        })}
    </Buttons>
  );
});

export default Button;
