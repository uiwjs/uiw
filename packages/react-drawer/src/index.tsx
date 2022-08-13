import React, { useMemo } from 'react';
import { OverlayProps } from '@uiw/react-overlay';
import { Close } from '@uiw/icons/lib/Close';
import Button from '@uiw/react-button';
import { IconStyleBase } from '@uiw/react-icon';
import { HTMLDivProps } from '@uiw/utils';
import {
  DrawerStyleWrap,
  DrawerStyleWrapperWrap,
  DrawerStyleHeaderWrap,
  DrawerStyleBodyWrap,
  DrawerStyleFooterWrap,
  DrawerStyleBodyClsWrap,
} from './style';
export * from './style';

export interface DrawerProps extends OverlayProps {
  footer?: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  bodyProps?: HTMLDivProps;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  size?: number;
  isCloseButtonShown?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default (props: DrawerProps = {}) => {
  const {
    prefixCls = 'w-drawer',
    className,
    style,
    placement = 'right',
    size = 260,
    title,
    footer,
    icon,
    isCloseButtonShown = true,
    bodyProps,
    timeout = 300,
    isOpen = false,
    maskClosable = true,
    ...overlayProps
  } = props;
  const cls = [className, prefixCls, placement].filter(Boolean).join(' ').trim();
  const bodyCls = [bodyProps ? bodyProps.className : null, prefixCls ? `${prefixCls}-body-inner` : null]
    .filter(Boolean)
    .join(' ')
    .trim();
  const styl = {
    ...style,
    [/^(top|bottom)$/.test(placement!) ? 'height' : 'width']: size,
  };
  const footerView = useMemo(
    () => (footer ? <DrawerStyleFooterWrap className={`${prefixCls}-footer`}>{footer}</DrawerStyleFooterWrap> : null),
    [footer],
  );
  const iconView = icon; // useMemo(() => (icon ? <Icon type={icon} /> : null), [icon]);
  const titleView = useMemo(() => (title ? <h4>{title}</h4> : null), [title]);

  return (
    <DrawerStyleWrap
      placement={placement}
      className={cls}
      timeout={timeout}
      isOpen={isOpen}
      maskClosable={maskClosable}
      {...overlayProps}
    >
      <DrawerStyleWrapperWrap className={`${prefixCls}-wrapper`} style={styl}>
        {(title || icon) && (
          <DrawerStyleHeaderWrap className={`${prefixCls}-header`}>
            {iconView}
            {titleView}
            {title && isCloseButtonShown && (
              <Button basic onClick={props.onClose} icon={<IconStyleBase as={Close} />} type="light" />
            )}
          </DrawerStyleHeaderWrap>
        )}
        <DrawerStyleBodyWrap className={`${prefixCls}-body`}>
          <DrawerStyleBodyClsWrap {...bodyProps} className={bodyCls}>
            {props.children}
          </DrawerStyleBodyClsWrap>
        </DrawerStyleBodyWrap>
        {footerView}
      </DrawerStyleWrapperWrap>
    </DrawerStyleWrap>
  );
};
