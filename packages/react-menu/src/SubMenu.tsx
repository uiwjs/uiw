import React, { useMemo, useState, useImperativeHandle } from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import OverlayTrigger, {
  OverlayTriggerProps,
} from '@uiw/react-overlay-trigger';
import Icon from '@uiw/react-icon';
import { IProps } from '@uiw/utils';
import MenuItem, { MenuItemProps } from './MenuItem';
import Menu, { MenuProps } from './Menu';
import './style/submenu.less';

export interface SubMenuProps extends IProps, MenuItemProps {
  overlayProps?: OverlayTriggerProps;
  collapse?: boolean;
  disabled?: boolean;
  inlineCollapsed?: boolean;
  inlineIndent?: number;
}

export interface ISubMenuState {
  isOpen: boolean;
  overlayClassName: string;
}

function checkedMenuItem(node?: HTMLElement) {
  let isCheck = false;
  if (node) {
    // eslint-disable-next-line
    do {
      if (!node.dataset.menu) {
        isCheck = true;
      }
      if (node.dataset.menu && /^(subitem|divider)$/.test(node.dataset.menu)) {
        isCheck = false;
      }
    } while (!node.dataset.menu && (node = node.parentNode as HTMLElement));
  }
  return isCheck;
}

function IconView({
  prefixCls,
  collapse,
  isOpen,
}: {
  prefixCls?: string;
  collapse?: boolean;
  isOpen: boolean;
}) {
  return useMemo(
    () => (
      <Icon
        type="caret-right"
        className={[
          prefixCls ? `${prefixCls}-collapse-icon` : null,
          !collapse && isOpen ? 'w-open' : null,
          !collapse && !isOpen ? 'w-close' : null,
        ]
          .filter(Boolean)
          .join(' ')
          .trim()}
      />
    ),
    [prefixCls, collapse, isOpen],
  );
}

function SubMenu(
  props: SubMenuProps = {},
  ref:
    | ((instance: OverlayTrigger) => void)
    | React.RefObject<OverlayTrigger | null>
    | null,
) {
  const {
    prefixCls = 'w-menu-subitem',
    className,
    disabled,
    overlayProps = {},
    children,
    collapse = false,
    inlineIndent,
    inlineCollapsed,
    ...other
  } = props;
  const overlayTriggerProps = {} as OverlayTriggerProps & CSSTransitionProps;
  const menuProps: MenuProps = {
    bordered: true,
    children,
    inlineIndent,
    className: [prefixCls ? `${prefixCls}-overlay` : null]
      .filter(Boolean)
      .join(' ')
      .trim(),
  };
  const popupRef = React.createRef<OverlayTrigger>();
  const [isOpen, setIsOpen] = useState(false);
  useImperativeHandle(ref, () => popupRef.current);
  useMemo(() => {
    setIsOpen(false);
  }, [collapse]);
  function onClick(e: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    const target = e.currentTarget;
    const related = (e.relatedTarget || e.nativeEvent.target) as HTMLElement;
    if (!popupRef.current || target.children.length < 1) return;
    if (checkedMenuItem(related)) {
      popupRef.current.hide();
    }
  }
  function onExit(node: HTMLElement) {
    node.style.height = `${node.scrollHeight}px`;
    setIsOpen(false);
  }
  function onExiting(node: HTMLElement) {
    node.style.height = '0px';
  }
  function onEnter(node: HTMLElement) {
    node.style.height = '1px';
    setIsOpen(true);
  }
  function onEntering(node: HTMLElement) {
    node.style.height = `${node.scrollHeight}px`;
  }
  function onEntered(node: HTMLElement) {
    node.style.height = 'initial';
  }

  if (!collapse) {
    delete menuProps.onClick;
    menuProps.bordered = false;
    overlayTriggerProps.className = `${prefixCls}-collapse`;
    overlayTriggerProps.appear = false;
    overlayTriggerProps.isOutside = true;
    overlayTriggerProps.isClickOutside = false;
    overlayTriggerProps.unmountOnExit = false;
    overlayTriggerProps.trigger = 'click';
    overlayTriggerProps.transitionName = `${prefixCls}`;
    overlayTriggerProps.onExit = onExit;
    overlayTriggerProps.onExiting = onExiting;
    overlayTriggerProps.onEnter = onEnter;
    overlayTriggerProps.onEntered = onEntered;
    overlayTriggerProps.onEntering = onEntering;
  } else {
    overlayTriggerProps.className = `${prefixCls}-popup`;
    overlayTriggerProps.trigger = 'hover';
    // overlayTriggerProps.usePortal = true;
    menuProps.onClick = onClick;
  }
  return (
    <li data-menu="subitem">
      <OverlayTrigger
        placement="rightTop"
        autoAdjustOverflow
        disabled={disabled}
        ref={popupRef}
        usePortal={false}
        isOutside
        {...overlayTriggerProps}
        {...overlayProps}
        overlay={
          <Menu
            {...menuProps}
            style={!collapse ? { paddingLeft: inlineIndent } : {}}
          />
        }
      >
        <MenuItem
          {...other}
          disabled={disabled}
          isSubMenuItem
          addonAfter={
            <IconView
              collapse={collapse}
              prefixCls={prefixCls}
              isOpen={isOpen}
            />
          }
          className={[
            prefixCls ? `${prefixCls}-title` : null,
            !collapse ? `${prefixCls}-collapse-title` : null,
            className,
          ]
            .filter(Boolean)
            .join(' ')
            .trim()}
        />
      </OverlayTrigger>
    </li>
  );
}

SubMenu.displayName = 'uiw.SubMenu';
export default React.forwardRef<OverlayTrigger, SubMenuProps>(SubMenu);
