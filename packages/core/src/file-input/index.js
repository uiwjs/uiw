import React from 'react';
import classnames from 'classnames';
import Input from '../input';
import './style/index.less';

export default function ({ ...props }) {
  props.className = classnames(props.className, 'w-fileinput');
  return (
    <Input {...props} type="file" />
  );
}
