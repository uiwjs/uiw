import React from 'react';
import Input, { InputProps } from '@uiw/react-input';
import { FileInputProps } from './';

export interface InputUploadProps extends FileInputProps, InputProps {}

export default React.forwardRef<HTMLInputElement, InputUploadProps>((props, ref) => {
  const { className, dataLabel = 'Browse', prefixCls = 'w-fileinput', ...other } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return <Input ref={ref} data-label={dataLabel} className={cls} {...other} type="file" />;
});
