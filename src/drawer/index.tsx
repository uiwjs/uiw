import React from 'react';
import classnames from 'classnames';
import Overlay, { IOverlayProps } from '../overlay';
import Icon from '../icon';
import Button from '../button';
import './style/index.less';

export interface IDrawerProps extends IOverlayProps {
  footer?: React.ReactNode;
  icon?: JSX.Element | string | false | null;
  title?: React.ReactNode;
  placement: 'top' | 'right' | 'bottom' | 'left';
  size: number;
  isCloseButtonShown: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default class Drawer extends React.PureComponent<IDrawerProps> {
  public static defaultProps: IDrawerProps = {
    prefixCls: 'w-drawer',
    placement: 'right',
    isCloseButtonShown: true,
    size: 260,
    timeout: 300,
    isOpen: false,
    maskClosable: true,
  }
  render() {
    const { prefixCls, className, style, placement, size, title, footer, icon, isCloseButtonShown, ...overlayProps } = this.props;
    const cls = classnames(className, prefixCls, `${placement}`);
    const styl = { ...style, [/^(top|bottom)$/.test(placement) ? 'height' : 'width']: size };
    return (
      <Overlay className={cls} {...overlayProps}>
        <div className={`${prefixCls}-wrapper`} style={styl}>
          {(title || icon) && (
            <div className={`${prefixCls}-header`}>
              {icon && <Icon type={icon} />}
              {title && <h4>{title}</h4>}
              {title && isCloseButtonShown && <Button basic onClick={this.props.onClose} icon="close" type="light" />}
            </div>
          )}
          <div className={`${prefixCls}-body`}>
            <div className={`${prefixCls}-body-inner`}>
              {this.props.children}
            </div>
          </div>
          {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
        </div>
      </Overlay>
    );
  }
}
