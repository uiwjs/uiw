import React, { useImperativeHandle } from 'react';
import { IProps, HTMLTextProps } from '@uiw/utils';
import './style/index.less';

export interface TextareaProps extends IProps, HTMLTextProps {}

function Textarea(
  props: TextareaProps = {},
  ref:
    | ((instance: HTMLTextAreaElement) => void)
    | React.RefObject<HTMLTextAreaElement | null>
    | null,
) {
  const { prefixCls = 'w-textarea', className, ...restProps } = props;
  const textRef = React.createRef<HTMLTextAreaElement>();
  useImperativeHandle(ref, () => textRef.current);
  return (
    <textarea
      className={[prefixCls, className].filter(Boolean).join(' ').trim()}
      {...restProps}
      ref={textRef}
    >
      {props.children}
    </textarea>
  );
}

export default React.forwardRef<HTMLTextAreaElement, TextareaProps>(Textarea);
