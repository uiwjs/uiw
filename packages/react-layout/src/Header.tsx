import React from 'react';
import classnames from 'classnames';
import { IProps } from '@uiw/utils';

export interface HeaderProps extends IProps {
  children?: React.ReactNode;
}

export default (props: HeaderProps = {}) => {
  const {
    prefixCls = 'w-layout-header',
    className,
    children,
    ...other
  } = props;
  return (
    <header className={classnames(prefixCls, className)} {...other}>
      {children}
    </header>
  );
};
