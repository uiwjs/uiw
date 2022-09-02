import React, { Fragment } from 'react';
import { IconProps } from '@uiw/react-icon';
import { IProps } from '@uiw/utils';
import { MenuStyleItemBase, MenuItemStyleTextBase, MenuStyleItemIcon } from './style';

const disabledProps = {
  href: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
  tabIndex: -1,
};

export type TagType = React.ComponentType | keyof JSX.IntrinsicElements;

export interface MenuItemProps<Tag extends TagType> extends IProps, React.HTMLProps<Tag> {
  text?: React.ReactNode;
  addonAfter?: React.ReactNode;
  tagName?: Tag;
  multiline?: boolean;
  isSubMenuItem?: boolean;
  disabled?: boolean;
  active?: boolean;
  icon?: IconProps['type'];
  children?: React.ReactNode;
  theme?: 'light' | 'dark';
}

function Internal<Tag extends TagType = 'a'>(props: MenuItemProps<Tag>, ref: React.Ref<React.HTMLProps<Tag>>) {
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
    theme,
    ...htmlProps
  } = props;
  const anchorCls = [prefixCls, active ? 'active' : null, disabled ? 'w-disabled' : null, className]
    .filter(Boolean)
    .join(' ')
    .trim();

  const tagComp = React.createElement(
    MenuStyleItemBase,
    {
      ...htmlProps,
      ...(disabled ? disabledProps : {}),
      className: anchorCls,
      ref,
      as: TagName,
      params: {
        theme,
        active,
        disabled,
      },
    } as any,
    <Fragment>
      <MenuStyleItemIcon className={`${prefixCls}-icon`} type={icon} />
      <MenuItemStyleTextBase
        params={{ multiline, isText: !!prefixCls }}
        className={[prefixCls && `${prefixCls}-text`, !multiline && `${prefixCls}-multiline`]
          .filter(Boolean)
          .join(' ')
          .trim()}
      >
        {text}
      </MenuItemStyleTextBase>
      {addonAfter}
    </Fragment>,
  );
  if (isSubMenuItem) {
    return tagComp;
  }
  return <li> {tagComp} </li>;
}

export const MenuItem = React.forwardRef(Internal);

MenuItem.displayName = 'uiw.MenuItem';
