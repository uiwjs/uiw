import React from 'react';
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
    <header
      className={[prefixCls, className].filter(Boolean).join(' ').trim()}
      {...other}
    >
      {children}
    </header>
  );
};
