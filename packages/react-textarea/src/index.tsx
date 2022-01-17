import React from 'react';
import { IProps, HTMLTextProps } from '@uiw/utils';
import './style/index.less';

export interface TextareaProps extends IProps, HTMLTextProps {}

export default React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { prefixCls = 'w-textarea', className, ...restProps } = props;
  return (
    <textarea className={[prefixCls, className].filter(Boolean).join(' ').trim()} {...restProps} ref={ref}>
      {props.children}
    </textarea>
  );
});
