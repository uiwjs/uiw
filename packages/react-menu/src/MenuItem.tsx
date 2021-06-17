import React, { Fragment } from 'react';
import Icon from '@uiw/react-icon';
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

export interface MenuItemProps
  extends IProps,
    React.HTMLAttributes<HTMLOrSVGElement> {
  text?: React.ReactNode;
  addonAfter?: React.ReactNode;
  tagName?: keyof JSX.IntrinsicElements;
  multiline?: boolean;
  isSubMenuItem?: boolean;
  disabled?: boolean;
  active?: boolean;
  icon?: JSX.Element | string | false | null;
}

const MenuItem = React.forwardRef<HTMLOrSVGElement, MenuItemProps>(
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
