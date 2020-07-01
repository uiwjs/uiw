import React, { useImperativeHandle } from 'react';
import classnames from 'classnames';
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
  const cls = classnames(prefixCls, className);
  return (
    <textarea className={cls} {...restProps} ref={textRef}>
      {props.children}
    </textarea>
  );
}

export default React.forwardRef<HTMLTextAreaElement, TextareaProps>(Textarea);
