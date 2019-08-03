import React from 'react';
import classnames from 'classnames';
import Input, { IInputProps } from '../input';
import './style/index.less';

export interface IFileInputProps extends IInputProps {}

export default function ({ ...props }: IFileInputProps) {
  props.className = classnames(props.className, 'w-fileinput');
  return (
    <Input {...props} type="file" />
  );
}
