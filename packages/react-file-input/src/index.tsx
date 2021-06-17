import React from 'react';
import Input, { InputProps } from '@uiw/react-input';
import './style/index.less';

export interface FileInputProps<T> extends InputProps<T> {}

export default React.forwardRef<HTMLInputElement, InputProps<{}>>(
  (props, ref) => {
    props.className = [props.className, 'w-fileinput']
      .filter(Boolean)
      .join(' ')
      .trim();
    return <Input ref={ref} data-label="Browse" {...props} type="file" />;
  },
);
