import React, { useImperativeHandle } from 'react';
import Input, { InputProps } from '@uiw/react-input';
import './style/index.less';

export interface FileInputProps<T> extends InputProps<T> {}

function FileInput<T>(
  { ...props }: FileInputProps<T>,
  ref:
    | ((instance: HTMLInputElement) => void)
    | React.RefObject<HTMLInputElement | null>
    | null,
): JSX.Element {
  const inputRef = React.createRef<HTMLInputElement>();
  useImperativeHandle(ref, () => inputRef.current);
  props.className = [props.className, 'w-fileinput']
    .filter(Boolean)
    .join(' ')
    .trim();
  return <Input ref={inputRef} {...props} type="file" />;
}

export default React.forwardRef<HTMLInputElement, InputProps<{}>>(FileInput);
