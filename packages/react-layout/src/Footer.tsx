import React from 'react';
import classnames from 'classnames';
import { IProps } from '@uiw/utils';

export interface FooterProps extends IProps {
  children?: React.ReactNode;
}

export default (props: FooterProps = {}) => {
  const {
    prefixCls = 'w-layout-footer',
    className,
    children,
    ...other
  } = props;
  return (
    <footer className={classnames(prefixCls, className)} {...other}>
      {children}
    </footer>
  );
};
