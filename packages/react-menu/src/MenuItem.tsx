import React, { Fragment } from 'react';
import Icon, { IconProps } from '@uiw/react-icon';
import { IProps } from '@uiw/utils';
import './style/item.less';

const disabledProps = {
  href: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
  tabIndex: -1,
};

type AnchorElement = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type Anchor<T = any> = T extends HTMLElement ? React.HTMLProps<T> : T;

export interface MenuItemProps<T> extends IProps, Anchor {
  text?: React.ReactNode;
  addonAfter?: React.ReactNode;
  tagName?: T extends HTMLElement ? keyof JSX.IntrinsicElements : never;
  multiline?: boolean;
  isSubMenuItem?: boolean;
  disabled?: boolean;
  active?: boolean;
  icon?: IconProps['type'];
}

const MenuItem = React.forwardRef<AnchorElement, MenuItemProps<any>>(
  (props, ref) => {
    const {
      prefixCls = 'w-menu-item',
      className,
      tagName: TagName = 'a',
      children,
      disabled = false,
      multiline = false,
      icon,
      text,
      active = false,
      addonAfter,
      isSubMenuItem,
      ...htmlProps
    } = props;
    const anchorCls = [
      prefixCls,
      active ? 'active' : null,
      disabled ? 'w-disabled' : null,
      className,
    ]
      .filter(Boolean)
      .join(' ')
      .trim();

    const tagComp = React.createElement(
      TagName,
      {
        ...htmlProps,
        ...(disabled ? disabledProps : {}),
        className: anchorCls,
        ref,
      },
      <Fragment>
        <Icon className={`${prefixCls}-icon`} type={icon} />
        <div
          className={[
            prefixCls && `${prefixCls}-text`,
            !multiline && `${prefixCls}-multiline`,
          ]
            .filter(Boolean)
            .join(' ')
            .trim()}
        >
          {text}
        </div>
        {addonAfter}
      </Fragment>,
    );
    if (isSubMenuItem) {
      return tagComp;
    }
    return <li> {tagComp} </li>;
  },
);

MenuItem.displayName = 'uiw.MenuItem';

export default MenuItem;
