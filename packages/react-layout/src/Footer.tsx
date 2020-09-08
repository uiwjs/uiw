import React from 'react';
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
    <footer
      className={[prefixCls, className].filter(Boolean).join(' ').trim()}
      {...other}
    >
      {children}
    </footer>
  );
};
