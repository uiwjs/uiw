import React from 'react';
import copy from '@uiw/copy-to-clipboard';
import { IProps, HTMLSpanProps } from '@uiw/utils';
import styled from 'styled-components';

const Span = styled.span`
  cursor: pointer;
  &.w-copy-to-clipboard-select {
    user-select: text;
    display: none;
  }
`;

export interface CopyToClipboardProps extends IProps, Omit<HTMLSpanProps, 'onClick'> {
  text?: string;
  onClick?: (text: string, isCopy: boolean, event: React.MouseEvent<HTMLElement>) => void;
}

export default function CopyToClipboard<T>(props: CopyToClipboardProps & T) {
  const {
    prefixCls = 'w-copy-to-clipboard',
    className,
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
    className: [prefixCls, className].filter(Boolean).join(' ').trim(),
    onClick: handleClick,
  };
  return (
    <Span {...otherProps}>
      <span className={`${prefixCls}-select`}>{text}</span>
      {children}
    </Span>
  );
}
