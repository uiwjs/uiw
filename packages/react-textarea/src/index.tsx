import React from 'react';
import { IProps, HTMLTextProps } from '@uiw/utils';
// import './style/index.less';
import { TextareaWarp } from './style/index';
export * from './style';
export interface TextareaProps extends IProps, HTMLTextProps {}

export default React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { prefixCls = 'w-textarea', className, ...restProps } = props;
  return (
    <TextareaWarp className={[prefixCls, className].filter(Boolean).join(' ').trim()} {...restProps} ref={ref}>
      {props.children}
    </TextareaWarp>
  );
});
