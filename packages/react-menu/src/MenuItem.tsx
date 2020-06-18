import React from 'react';
import classNames from 'classnames';
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

export interface MenuItemProps extends IProps, React.AllHTMLAttributes<HTMLElement> {
  text?: React.ReactNode;
  addonAfter?: React.ReactNode;
  tagName?: keyof JSX.IntrinsicElements | any;
  multiline?: boolean;
  isSubMenuItem?: boolean;
  disabled?: boolean;
  active?: boolean;
  icon?: JSX.Element | string | false | null;
}

export default function MenuItem<T>(props = {} as  MenuItemProps & T) {
  const { prefixCls = 'w-menu-item', className, tagName: TagName = 'a', children, disabled = false, multiline = false, icon, text, active = false, addonAfter, isSubMenuItem, ...htmlProps } = props;
  const anchorCls = classNames(prefixCls, { active, 'w-disabled': disabled }, className);
  const tagComp = (
    <TagName
      {...htmlProps}
      {...(disabled ? disabledProps : {})}
      className={anchorCls}
    >
      <Icon className={`${prefixCls}-icon`} type={icon} />
      <div className={classNames(`${prefixCls}-text`, { [`${prefixCls}-multiline`]: !multiline })}>
        {text}
      </div>
      {addonAfter}
    </TagName>
  );
  if (isSubMenuItem) {
    return tagComp;
  }
  return <li> {tagComp} </li>;
}
