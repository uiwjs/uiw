import React from 'react';
import Input, { InputProps } from '@uiw/react-input';
import './style/index.less';

export interface FileInputProps<T> extends InputProps<T> {}

export default React.forwardRef<HTMLInputElement, InputProps<{}>>(
  (props, ref) => {
    const { className, prefixCls = 'w-fileinput', ...other } = props;
    const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
    return (
      <Input
        ref={ref}
        data-label="Browse"
        className={cls}
        {...other}
        type="file"
      />
    );
  },
);
