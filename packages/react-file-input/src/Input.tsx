import React from 'react';
import { InputProps } from '@uiw/react-input';
import { FileInputProps } from './';
import { FileInputWarp } from './style';

export interface InputUploadProps extends FileInputProps, InputProps {}

export default React.forwardRef<HTMLInputElement, InputUploadProps>((props, ref) => {
  const { className, dataLabel = 'Browse', ...other } = props;
  const cls = [className].filter(Boolean).join(' ').trim();
  return <FileInputWarp ref={ref} data-label={dataLabel} className={cls} {...other} type="file" />;
});
