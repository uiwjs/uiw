import React from 'react';
import classnames from 'classnames';
import Input, { InputProps } from '@uiw/react-input';
import './style/index.less';

export interface FileInputProps<T> extends InputProps<T> {}

export default function FileInput<T>({
  ...props
}: FileInputProps<T>): JSX.Element {
  props.className = classnames(props.className, 'w-fileinput');
  return <Input {...props} type="file" />;
}
