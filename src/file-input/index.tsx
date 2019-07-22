import React from 'react';
import classnames from 'classnames';
import Input, { IInputProps } from '../input';
import { HTMLInputProps } from '../utils/props';
import './style/index.less';

export default function ({ ...props }: IInputProps & HTMLInputProps) {
  props.className = classnames(props.className, 'w-fileinput');
  return (
    <Input {...props} type="file" />
  );
}
