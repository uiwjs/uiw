import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps, HTMLAnchorProps } from '../utils/props';

type AnchorProps = 'download' | 'href' | 'hrefLang' | 'media' | 'ping' | 'rel' | 'target' | 'type' | 'referrerPolicy';

export interface ListItemProps extends IProps, HTMLDivProps, Pick<HTMLAnchorProps, AnchorProps> {
  disabled?: boolean;
  active?: boolean;
  extra?: React.ReactNode;
  href?: string;
}

export default class Item extends React.Component<ListItemProps> {
  public static defaultProps: ListItemProps = {
    prefixCls: 'w-list-item',
    disabled: false,
    active: false,
  }
  render(): JSX.Element {
    const { prefixCls, className, children, extra, active, ...resetProps } = this.props;
    const cls = classnames(`${prefixCls}`, className, {
      'w-disabled': this.props.disabled,
      'w-active': active,
    });

    const tagName = this.props.href ? 'a' : 'div';
    return React.createElement(tagName, {
      className: cls,
      ...resetProps,
    }, !extra || resetProps.href ? children :(
      <>
        <div className={`${prefixCls}-main`}>{children}</div>
        <div className={`${prefixCls}-extra`}>{extra}</div>
      </>
    ));
  }
}
