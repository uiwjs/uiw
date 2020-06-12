import React from 'react';
import classnames from 'classnames';
import { IProps } from '@uiw/utils';

export interface ContentProps extends IProps {
  children?: React.ReactChild;
}

export default (props: ContentProps = {}) => {
  const { prefixCls = 'w-layout-content', className, children, ...other } = props;
  return (
    <main className={classnames(prefixCls, className)} {...other}>{children}</main>
  );
}
