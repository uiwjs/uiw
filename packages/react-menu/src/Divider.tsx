import React from 'react';
import { IProps, HTMLLiProps } from '@uiw/utils';
import { MenuDividerBase } from './style';
export interface MenuDividerProps extends IProps, Omit<HTMLLiProps, 'title'> {
  title?: React.ReactNode;
}

export const MenuDivider = React.forwardRef<HTMLLIElement, MenuDividerProps>((props, ref) => {
  const { prefixCls = 'w-menu-divider', className, title, ...htmlProps } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  if (!title) {
    return <MenuDividerBase {...htmlProps} ref={ref} className={cls} />;
  }
  return (
    <MenuDividerBase {...htmlProps} ref={ref} className={cls} data-menu="divider">
      <strong>{title}</strong>
    </MenuDividerBase>
  );
});

MenuDivider.displayName = 'uiw.MenuDivider';
