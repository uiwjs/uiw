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

export default class MenuItem<T> extends React.Component<MenuItemProps & T> {
  static displayName = 'uiw.MenuItem';
  public static defaultProps: MenuItemProps = {
    prefixCls: 'w-menu-item',
    tagName: 'a',
    multiline: false,
    disabled: false,
    active: false,
  }
  public render() {
    const { prefixCls, className, tagName: TagName = 'a', children, disabled, multiline, icon, text, active, addonAfter, isSubMenuItem, ...htmlProps } = this.props;
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
}
