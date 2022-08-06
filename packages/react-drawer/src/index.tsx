import React, { useMemo } from 'react';
import { OverlayProps } from '@uiw/react-overlay';
import { Close } from '@uiw/icons/lib/Close';
import Button from '@uiw/react-button';
import { IconStyleBase } from '@uiw/react-icon';
import { HTMLDivProps } from '@uiw/utils';
import {
  DrawerWrap,
  DrawerWrapperWrap,
  DrawerHeaderWrap,
  DrawerBodyWrap,
  DrawerFooterWrap,
  DrawerBodyClsWrap,
} from './style';
// import './style/index.less';

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
    () => (footer ? <DrawerFooterWrap className={`${prefixCls}-footer`}>{footer}</DrawerFooterWrap> : null),
    [footer],
  );
  const iconView = icon; // useMemo(() => (icon ? <Icon type={icon} /> : null), [icon]);
  const titleView = useMemo(() => (title ? <h4>{title}</h4> : null), [title]);

  return (
    <DrawerWrap
      placement={placement}
      className={cls}
      timeout={timeout}
      isOpen={isOpen}
      maskClosable={maskClosable}
      {...overlayProps}
    >
      <DrawerWrapperWrap className={`${prefixCls}-wrapper`} style={styl}>
        {(title || icon) && (
          <DrawerHeaderWrap className={`${prefixCls}-header`}>
            {iconView}
            {titleView}
            {title && isCloseButtonShown && (
              <Button basic onClick={props.onClose} icon={<IconStyleBase as={Close} />} type="light" />
            )}
          </DrawerHeaderWrap>
        )}
        <DrawerBodyWrap className={`${prefixCls}-body`}>
          <DrawerBodyClsWrap {...bodyProps} className={bodyCls}>
            {props.children}
          </DrawerBodyClsWrap>
        </DrawerBodyWrap>
        {footerView}
      </DrawerWrapperWrap>
    </DrawerWrap>
  );
};
