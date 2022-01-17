import React from 'react';
import { IProps, HTMLLiProps } from '@uiw/utils';

export interface MenuDividerProps extends IProps, Omit<HTMLLiProps, 'title'> {
  title?: React.ReactNode;
}

function Divider(props: MenuDividerProps = {}) {
  const { prefixCls = 'w-menu-divider', className, title, ...htmlProps } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  if (!title) {
    return <li {...htmlProps} className={cls} />;
  }
  return (
    <li {...htmlProps} className={cls} data-menu="divider">
      <strong>{title}</strong>
    </li>
  );
}

Divider.displayName = 'uiw.MenuDivider';

export default Divider;
