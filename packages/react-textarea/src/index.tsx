import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLTextProps } from '@uiw/utils';
import './style/index.less';

export interface TextareaProps extends IProps, HTMLTextProps {}

export default (props: TextareaProps = {}) => {
  const { prefixCls = 'w-textarea', className, ...restProps } = props;
  const cls = classnames(prefixCls, className);
  return (
    <textarea className={cls} {...restProps}>
      {props.children}
    </textarea>
  );
};
