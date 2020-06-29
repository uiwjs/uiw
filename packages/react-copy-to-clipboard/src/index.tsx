import React from 'react';
import copy from '@uiw/copy-to-clipboard';
import classnames from 'classnames';
import { IProps, HTMLSpanProps } from '@uiw/utils';
import './style/index.less';

export interface CopyToClipboardProps
  extends IProps,
    Omit<HTMLSpanProps, 'onClick'> {
  text?: string;
  tagName?: string;
  onClick?: (
    text: string,
    isCopy: boolean,
    event: React.MouseEvent<HTMLElement>,
  ) => void;
}

export default function CopyToClipboard<T>(
  props = {} as CopyToClipboardProps & T,
) {
  const {
    prefixCls = 'w-copy-to-clipboard',
    className,
    tagName: TagName = 'span',
    text = '',
    children,
    onClick = () => null,
    ...resetProps
  } = props;
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    if (!text) {
      return onClick('', false, e);
    }
    copy(text, (isCopy: boolean) => {
      onClick(text, isCopy, e);
    });
  }
  const otherProps = {
    ...resetProps,
    className: classnames(prefixCls, className),
    onClick: handleClick,
  };
  return (
    <span {...otherProps}>
      <span className={`${prefixCls}-select`}>{text}</span>
      {children}
    </span>
  );
}
