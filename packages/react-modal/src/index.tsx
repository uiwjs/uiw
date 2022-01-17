import React, { useState, useEffect } from 'react';
import Overlay, { OverlayProps } from '@uiw/react-overlay';
import Button, { ButtonType, ButtonProps } from '@uiw/react-button';
import Icon, { IconProps } from '@uiw/react-icon';
import { IProps, noop } from '@uiw/utils';
import './style/index.less';

export interface ModalProps extends IProps, OverlayProps {
  type?: ButtonType;
  cancelText?: string;
  confirmButtonProps?: Omit<ButtonProps, 'ref'>;
  cancelButtonProps?: Omit<ButtonProps, 'ref'>;
  content?: React.ReactNode;
  confirmText?: string;
  title?: string;
  icon?: IconProps['type'];
  useButton?: boolean;
  usePortal?: boolean;
  autoFocus?: boolean;
  isCloseButtonShown?: boolean;
  isOpen?: boolean;
  bodyStyle?: React.CSSProperties;
  maxWidth?: number;
  minWidth?: number;
  width?: number;
  onCancel?: (evn: React.MouseEvent<HTMLButtonElement> & MouseEvent) => void;
  onConfirm?: (evn: React.MouseEvent<HTMLButtonElement> & MouseEvent) => void;
}

export default React.forwardRef<OverlayProps, ModalProps>((props, ref) => {
  const {
    prefixCls = 'w-modal',
    className,
    children,
    useButton = true,
    usePortal = true,
    autoFocus = false,
    isOpen: _ = false,
    title,
    cancelText,
    cancelButtonProps,
    confirmButtonProps,
    content,
    confirmText = '确认',
    type = 'light',
    icon,
    maxWidth = 500,
    minWidth = 320,
    width,
    isCloseButtonShown = true,
    onCancel = noop,
    onConfirm = noop,
    bodyStyle,
    ...other
  } = props;
  const [isOpen, setIsOpen] = useState(props.isOpen);
  useEffect(() => {
    if (props.isOpen !== isOpen) {
      setIsOpen(props.isOpen);
    }
  }, [props.isOpen]);

  const [loading, setLoading] = useState(false);
  const cls = [prefixCls, className, type ? `${type}` : null].filter(Boolean).join(' ').trim();
  function onClose() {
    setIsOpen(false);
  }
  async function handleCancel(e: React.MouseEvent<HTMLButtonElement, MouseEvent> & MouseEvent) {
    setLoading(true);
    try {
      onCancel && (await onCancel(e));
    } catch (e) {}
    setIsOpen(false);
    setLoading(false);
  }
  async function handleConfirm(e: React.MouseEvent<HTMLButtonElement, MouseEvent> & MouseEvent) {
    setLoading(true);
    try {
      onConfirm && (await onConfirm(e));
    } catch (e) {}
    setIsOpen(false);
    setLoading(false);
  }
  return (
    <Overlay usePortal={usePortal} isOpen={isOpen} {...other} onClose={onClose} className={cls}>
      <div className={`${prefixCls}-container`}>
        <div
          className={[
            `${prefixCls}-inner`,
            title ? `${prefixCls}-shown-title` : null,
            icon ? `${prefixCls}-shown-icon` : null,
          ]
            .filter(Boolean)
            .join(' ')
            .trim()}
          style={{ maxWidth, minWidth, width }}
        >
          {(title || icon) && (
            <div className={`${prefixCls}-header`}>
              {icon && <Icon type={icon} />}
              {title && <h4>{title}</h4>}
              {isCloseButtonShown && <Button basic onClick={(e) => handleCancel(e)} icon="close" type="light" />}
            </div>
          )}
          <div className={`${prefixCls}-body`} style={bodyStyle}>
            {children || content}
          </div>
          {useButton && (
            <div className={`${prefixCls}-footer`}>
              <Button
                autoFocus={autoFocus}
                type={type}
                loading={loading}
                disabled={loading}
                {...confirmButtonProps}
                onClick={(e) => handleConfirm(e)}
              >
                {confirmText}
              </Button>
              {cancelText && (
                <Button {...cancelButtonProps} onClick={(e) => handleCancel(e)}>
                  {cancelText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Overlay>
  );
});
