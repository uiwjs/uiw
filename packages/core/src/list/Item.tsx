import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps, HTMLAnchorProps } from '../utils/props';

export interface IListItem extends IProps {
  disabled: boolean;
  active: boolean;
  href?: string;
}

export default class Item extends React.Component<IListItem & HTMLDivProps & HTMLAnchorProps> {
  public static defaultProps: IListItem = {
    prefixCls: 'w-list-item',
    disabled: false,
    active: false,
  }
  render() {
    const { prefixCls, className, children, active, ...resetProps } = this.props;
    const cls = classnames(`${prefixCls}`, className, {
      'w-disabled': this.props.disabled,
      'w-active': active,
    });

    const tagName = this.props.href ? 'a' : 'div';
    return React.createElement(tagName, {
      className: cls,
      ...resetProps,
    }, children);
  }
}
