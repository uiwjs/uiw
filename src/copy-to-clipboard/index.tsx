import React from 'react';
import copy from '@uiw/copy-to-clipboard';
import { IProps, HTMLAnchorProps } from '../utils/props'
import './style/index.less';

export interface ICopyToClipboard extends IProps, Omit<HTMLAnchorProps, 'onClick'> {
  text?: string;
  onClick?: (text: string, isCopy: boolean, event: React.MouseEvent<HTMLElement>) => void;
}

export default class CopyToClipboard extends React.Component<ICopyToClipboard> {
  public static defaultProps: ICopyToClipboard = {
    text: '',
    prefixCls: 'w-copy-to-clipboard',
    onClick: () => null,
  }
  onClick(e: React.MouseEvent<HTMLElement>) {
    const { onClick, text } = this.props;
    if (!text) {
      return onClick!('', false, e);
    }
    copy(text, (isCopy: boolean) => {
      onClick!(text, isCopy, e);
    });
  }
  public render() {
    const { prefixCls, text, children, ...resetProps } = this.props;
    const concatProps = {
      ...resetProps,
      ...{
        onClick: this.onClick.bind(this),
        className: prefixCls,
      },
    };
    return (
      <a {...concatProps}>
        <span className={`${prefixCls}-select`}>{text}</span>
        {children}
      </a>
    );
  }
}
