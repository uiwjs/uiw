import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLSpanProps } from '@uiw/utils';
import './style/index.less';

export interface TagProps extends IProps, Omit<HTMLSpanProps, 'title'> {
  color?: string;
  disabled?: boolean;
  visible?: boolean;
  bordered?: boolean;
  light?: boolean;
  closable?: boolean;
  title?: React.ReactNode;
  onClose?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default class Tag extends React.Component<TagProps> {
  public static defaultProps: TagProps = {
    prefixCls: 'w-tag',
    disabled: false,
    visible: true,
    bordered: true,
    color: '#6E6E6E',
    light: false,
    title: '',
  }
  render() {
    const { prefixCls, className, style, title, children, visible, color, disabled, bordered, closable, light, onClose, ...other } = this.props;
    const cls = classnames(`${prefixCls}`, className, { [`${prefixCls}-light`]: light, disabled });
    const styl: React.CSSProperties = { ...style };
    if (!light) {
      styl.color = '#fff';
      styl.backgroundColor = color;
    } else {
      styl.color = color;
      styl.borderColor = color;
      if (bordered && light) {
        styl.boxShadow = `inset 0 0 0 1px ${color}`;
      }
    }
    if (!visible) {
      return null;
    }
    return (
      <span className={cls} style={styl} {...other}>
        {title || children}
        {closable && (
          <svg onClick={onClose} className={`${prefixCls}-close`} width="16" height="16" viewBox="0 0 16 16">
            <path d="M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z" />
          </svg>
        )}
      </span>
    );
  }
}
