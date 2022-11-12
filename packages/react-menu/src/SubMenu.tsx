import React, { useMemo, useState } from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { OverlayTriggerProps, OverlayTriggerRef } from '@uiw/react-overlay-trigger';
import { IProps } from '@uiw/utils';
import { MenuItem, MenuItemProps, TagType } from './MenuItem';
import Menu, { MenuProps } from './Menu';
import { SubItemCollapseIcon, MenuStyleSubOverlayTriggerBase } from './style';
import { useMenuContext } from './hooks';
import { CaretRight } from '@uiw/icons/lib/CaretRight';

export interface SubMenuProps<T extends TagType> extends IProps, MenuItemProps<T> {
  overlayProps?: OverlayTriggerProps;
  collapse?: boolean;
  disabled?: boolean;
  inlineCollapsed?: boolean;
  inlineIndent?: number;
  theme?: 'light' | 'dark';
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

function IconView({ prefixCls, collapse, isOpen }: { prefixCls?: string; collapse?: boolean; isOpen: boolean }) {
  return useMemo(
    () => (
      <SubItemCollapseIcon
        params={{
          prefixCls,
          collapse,
          isOpen,
        }}
        className={[
          prefixCls ? `${prefixCls}-collapse-icon` : null,
          !collapse && isOpen ? 'w-open' : null,
          !collapse && !isOpen ? 'w-close' : null,
        ]
          .filter(Boolean)
          .join(' ')
          .trim()}
      >
        <CaretRight style={{ fill: 'currentColor' }} />
      </SubItemCollapseIcon>
    ),
    [prefixCls, collapse, isOpen],
  );
}
export const SubMenu = React.forwardRef(function <Tag extends TagType = 'a'>(
  props: SubMenuProps<Tag>,
  ref: React.Ref<HTMLLIElement>,
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
    theme,
    ...other
  } = props;
  const overlayTriggerProps = {} as OverlayTriggerProps & CSSTransitionProps;
  const menuProps: MenuProps = {
    bordered: true,
    children,
    inlineIndent,
    theme,
    className: [prefixCls ? `${prefixCls}-overlay` : null].filter(Boolean).join(' ').trim(),
  };
  const store = useMenuContext();
  const popupRef = React.useRef<OverlayTriggerRef>(null);
  const [isOpen, setIsOpen] = useState(!!overlayProps.isOpen);
  useMemo(() => {
    if (collapse) setIsOpen(false);
  }, [collapse]);

  React.useEffect(() => {
    if (store && store.onUpdateNode && popupRef.current) {
      store.onUpdateNode(popupRef.current);
    }
  }, []);

  function onClick(e: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    const target = e.currentTarget;
    const related = (e.relatedTarget || e.nativeEvent.target) as HTMLElement;
    if (target.children.length < 1) return;
    if (checkedMenuItem(related)) {
      if (popupRef.current) {
        popupRef.current!.hide();
      }
    }
  }
  function onExit(node: HTMLElement) {
    node.style.height = `${node.scrollHeight}px`;
    store.onUpdateSize();
    setIsOpen(false);
  }
  function onExiting(node: HTMLElement) {
    node.style.height = '0px';
    // store.onUpdateSize();
  }
  function onEnter(node: HTMLElement) {
    node.style.height = '1px';
    store.onUpdateSize();
    setIsOpen(true);
  }
  function onEntering(node: HTMLElement) {
    node.style.height = `${node.scrollHeight}px`;
    store.onUpdateSize();
  }
  function onEntered(node: HTMLElement) {
    store.onUpdateSize();
    // node.style.height = 'initial';
    // if (popupRef.current && popupRef.current.overlayDom) {
    //   node.style.height = popupRef.current.overlayDom.current!.getBoundingClientRect().height + 'px';
    // }
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
    overlayTriggerProps.usePortal = true;
    menuProps.onClick = onClick;
  }
  return (
    <li data-menu="subitem" ref={ref}>
      <MenuStyleSubOverlayTriggerBase
        placement="rightTop"
        autoAdjustOverflow
        disabled={disabled}
        isOpen={isOpen}
        usePortal={false}
        isOutside
        {...overlayTriggerProps}
        {...overlayProps}
        ref={popupRef}
        params={{
          collapse,
        }}
        overlay={<Menu {...menuProps} style={!collapse ? { paddingLeft: inlineIndent } : {}} />}
      >
        <MenuItem
          {...other}
          theme={theme}
          ref={null}
          disabled={disabled}
          isSubMenuItem
          addonAfter={<IconView collapse={collapse} prefixCls={prefixCls} isOpen={isOpen} />}
          className={[
            prefixCls ? `${prefixCls}-title` : null,
            !collapse ? `${prefixCls}-collapse-title` : null,
            className,
          ]
            .filter(Boolean)
            .join(' ')
            .trim()}
        />
      </MenuStyleSubOverlayTriggerBase>
    </li>
  );
});

SubMenu.displayName = 'uiw.SubMenu';
