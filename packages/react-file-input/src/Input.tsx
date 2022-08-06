import React from 'react';
import { InputProps } from '@uiw/react-input';
import { FileInputProps } from './';
import { FileInputStyleWarp } from './style';

export interface InputUploadProps extends FileInputProps, InputProps {}

export default React.forwardRef<HTMLInputElement, InputUploadProps>((props, ref) => {
  const { className, dataLabel = 'Browse', prefixCls = 'w-fileinput', ...other } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return <FileInputStyleWarp ref={ref} data-label={dataLabel} className={cls} {...other} type="file" />;
});
