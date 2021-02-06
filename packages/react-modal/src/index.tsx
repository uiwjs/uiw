import React, { useState, useImperativeHandle } from 'react';
import Overlay, { OverlayProps } from '@uiw/react-overlay';
import Button, { ButtonType, ButtonProps } from '@uiw/react-button';
import Icon from '@uiw/react-icon';
import { IProps } from '@uiw/utils';
import './style/index.less';

function noop() {}

export interface ModalProps extends IProps, OverlayProps {
  type?: ButtonType;
  cancelText?: string;
  cancelButtonProps?: ButtonProps;
  content?: React.ReactNode;
  confirmText?: string;
  confirmButtonProps?: ButtonProps;
  title?: string;
  icon?: JSX.Element | string | false | null;
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

function InternalModal(
  props: ModalProps = {},
  ref?:
    | ((instance: OverlayProps) => void)
    | React.RefObject<OverlayProps | null>
    | null,
) {
  const {
    prefixCls = 'w-modal',
    className,
    children,
    useButton = true,
    usePortal = true,
    autoFocus = false,
    isOpen = false,
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
  const overlayRef = React.createRef<Overlay>();
  useImperativeHandle(ref, () => overlayRef.current);
  const [loading, setLoading] = useState(false);
  const cls = [prefixCls, className, type ? `${type}` : null]
    .filter(Boolean)
    .join(' ')
    .trim();
  function onClose() {
    overlayRef.current!.overlayWillClose();
  }
  async function handleCancel(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> & MouseEvent,
    overlay: Overlay,
  ) {
    setLoading(true);
    try {
      onCancel && (await onCancel(e));
    } catch (e) {}
    overlay.overlayWillClose();
    setLoading(false);
  }
  async function handleConfirm(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> & MouseEvent,
    overlay: Overlay,
  ) {
    setLoading(true);
    try {
      onConfirm && (await onConfirm(e));
    } catch (e) {}
    overlay.overlayWillClose();
    setLoading(false);
  }
  return (
    <Overlay
      usePortal={usePortal}
      isOpen={isOpen}
      {...other}
      onClose={onClose}
      ref={overlayRef}
      className={cls}
    >
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
              {isCloseButtonShown && (
                <Button
                  basic
                  onClick={(e) => {
                    if (overlayRef.current) {
                      handleCancel(e, overlayRef.current);
                    }
                  }}
                  icon="close"
                  type="light"
                />
              )}
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
                onClick={(e) => {
                  if (overlayRef.current) {
                    handleConfirm(e, overlayRef.current);
                  }
                }}
              >
                {confirmText}
              </Button>
              {cancelText && (
                <Button
                  {...cancelButtonProps}
                  onClick={(e) => {
                    if (overlayRef.current) {
                      handleCancel(e, overlayRef.current);
                    }
                  }}
                >
                  {cancelText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Overlay>
  );
}

export default React.forwardRef<OverlayProps, ModalProps>(InternalModal);
