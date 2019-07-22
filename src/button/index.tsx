import React from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import './style/index.less';
import { IProps, HTMLButtonProps } from '../utils/props';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
export type ButtonSize = 'large' | 'default' | 'small';

export interface IButtonProps extends IProps {
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

export default class Button extends React.Component<IButtonProps & HTMLButtonProps> {
  public static defaultProps: IButtonProps = {
    prefixCls: 'w-btn',
    disabled: false,
    active: false,
    loading: false,
    block: false,
    basic: false,
    htmlType: 'button',
    type: 'light',
    size: 'default',
  }
  public render() {
    const { prefixCls, type, size, icon, active, disabled, block, basic, className, loading, children, htmlType, ...others } = this.props;
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
      <button {...others} type={htmlType} disabled={disabled || loading} className={cls}>
        {icon && <Icon type={icon} />}
        {children && React.Children.map(children, (child: React.ReactNode) => {
          if (!child) return child;
          if (React.isValidElement(child)) return child;
          return <span>{child}</span>;
        })}
      </button>
    );
  }
}
