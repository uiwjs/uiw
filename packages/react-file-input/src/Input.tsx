import React from 'react';
import Input, { InputProps } from '@uiw/react-input';
import { FileInputProps } from './types';

export interface InputUploadProps extends FileInputProps, InputProps {}

export default React.forwardRef<HTMLInputElement, InputUploadProps>((props, ref) => {
  const { className, prefixCls = 'w-fileinput', ...other } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return <Input ref={ref} data-label="Browse" className={cls} {...other} type="file" />;
});
