import React from 'react';
import classnames from 'classnames';
import Overlay, { OverlayProps } from '../overlay';
import Button, { ButtonType } from '../button';
import Icon from '../icon';
import { IProps } from "../utils/props";
import './style/index.less';

function noop() { }

export interface ModalProps extends IProps, OverlayProps {
  type?: ButtonType;
  cancelText?: string;
  content?: React.ReactNode;
  confirmText?: string;
  title?: string;
  icon?: JSX.Element | string | false | null;
  useButton?: boolean;
  usePortal?: boolean;
  autoFocus?: boolean;
  isCloseButtonShown?: boolean;
  isOpen?: boolean;
  maxWidth?: number;
  minWidth?: number;
  width?: number;
  onCancel?: (evn: React.MouseEvent<HTMLButtonElement> & MouseEvent) => void;
  onConfirm?: (evn: React.MouseEvent<HTMLButtonElement> & MouseEvent) => void;
}

export default class Modal extends React.PureComponent<ModalProps> {
  public static defaultProps: ModalProps = {
    prefixCls: 'w-modal',
    confirmText: '确认',
    useButton: true,
    usePortal: true,
    autoFocus: false,
    isCloseButtonShown: true,
    isOpen: false,
    maxWidth: 500,
    minWidth: 320,
    type: 'light',
    onCancel: noop,
    onConfirm: noop,
  }
  public state = {
    loading: false,
  }
  public overlay!: Overlay;
  handleConfirm = async (e: any) => {
    const { onConfirm } = this.props;
    this.setState({ loading: true });
    try {
      onConfirm && (await onConfirm(e));
      this.overlay.onClosed(e);
      // eslint-disable-next-line
    } catch (e) { }
    this.setState({ loading: false });
  }
  handleCancel = async (e: React.MouseEvent<HTMLButtonElement> & MouseEvent) => {
    const { onCancel } = this.props;
    this.setState({ loading: true });
    try {
      onCancel && (await onCancel(e));
      this.overlay.onClosed(e);
      // eslint-disable-next-line
    } catch (e) { }
    this.setState({ loading: false });
  }
  onClose = (e: any) => this.overlay.onClosed(e);
  render() {
    const { prefixCls, className, useButton, autoFocus, title, cancelText, content, confirmText, type, icon, maxWidth, minWidth, width, isCloseButtonShown, ...other } = this.props;
    const cls = classnames(prefixCls, className, { [`${type}`]: type });
    return (
      <Overlay
        {...other}
        onClose={this.onClose}
        ref={(node: Overlay) => this.overlay = node}
        className={cls}
      >
        <div className={`${prefixCls}-container`}>
          <div
            className={classnames(`${prefixCls}-inner`, {
              [`${prefixCls}-shown-title`]: title,
              [`${prefixCls}-shown-icon`]: icon,
            })}
            style={{ maxWidth, minWidth, width }}
          >
            {(title || icon) && (
              <div className={`${prefixCls}-header`}>
                {icon && <Icon type={icon} />}
                {title && <h4>{title}</h4>}
                {isCloseButtonShown && <Button basic onClick={this.handleCancel} icon="close" type="light" />}
              </div>
            )}
            <div className={`${prefixCls}-body`}>
              {this.props.children || content}
            </div>
            {useButton && (
              <div className={`${prefixCls}-footer`}>
                <Button autoFocus={autoFocus} type={type} loading={this.state.loading} disabled={this.state.loading} onClick={this.handleConfirm}>
                  {confirmText}
                </Button>
                {cancelText && <Button onClick={this.handleCancel}>{cancelText}</Button>}
              </div>
            )}
          </div>
        </div>
      </Overlay>
    );
  }
}
