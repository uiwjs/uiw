import React from 'react';
import { IProps } from '@uiw/utils';

export interface ContentProps extends IProps {
  children?: React.ReactNode;
}

export default (props: ContentProps = {}) => {
  const {
    prefixCls = 'w-layout-content',
    className,
    children,
    ...other
  } = props;
  return (
    <main
      className={[prefixCls, className].filter(Boolean).join(' ').trim()}
      {...other}
    >
      {children}
    </main>
  );
};
