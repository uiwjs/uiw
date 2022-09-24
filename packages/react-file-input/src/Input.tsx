import React from 'react';
import { FileInputDefaultProps } from './types';
import { FileInputStyleWarp } from './style';

export default React.forwardRef<HTMLInputElement, FileInputDefaultProps>((props, ref) => {
  const { className, dataLabel = 'Browse', prefixCls = 'w-fileinput', ...other } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return <FileInputStyleWarp ref={ref} data-label={dataLabel} className={cls} {...other} type="file" />;
});
