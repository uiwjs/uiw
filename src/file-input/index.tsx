import React from 'react';
import classnames from 'classnames';
import Input, { IInputProps } from '../input';
import './style/index.less';

export interface IFileInputProps<T> extends IInputProps<T> {}

export default function FileInput<T>({ ...props }: IFileInputProps<T>): JSX.Element {
  props.className = classnames(props.className, 'w-fileinput');
  return (
    <Input {...props} type="file" />
  );
}
