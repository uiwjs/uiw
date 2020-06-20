import React, { useImperativeHandle, MutableRefObject, useMemo } from 'react';
import classNames from 'classnames';
import { IProps, HTMLUlProps } from '@uiw/utils';
import MenuItem from './MenuItem';
import Divider from './Divider';
import SubMenu from './SubMenu';
import './style/menu.less';

export interface MenuProps extends IProps, HTMLUlProps {
  /** 主题颜色 */
  theme?: 'light' | 'dark';
  /**
   * 垂直是否收起菜单
   * Default: `false`
   */
  inlineCollapsed?: boolean;
  /**
   * 菜单缩进宽度 Default: `10`
   */
  inlineIndent?: number;
  bordered?: boolean;
}

function InternalMenu(props = {} as MenuProps, ref?: ((instance: unknown) => void) | MutableRefObject<unknown> | null) {
  const { prefixCls = 'w-menu', className, children, bordered, theme = 'light', inlineIndent = 10, inlineCollapsed, ...htmlProps } = props;
  const menuRef = React.createRef<HTMLUListElement>();
  useImperativeHandle(ref, () => menuRef.current);
  const cls = useMemo(() => classNames(prefixCls, {
    'w-bordered': bordered,
    [`${prefixCls}-inline-collapsed`]: inlineCollapsed,
    [`${prefixCls}-${theme}`]: theme
  }, className), [prefixCls, bordered, inlineCollapsed, theme, className]);

  return (
    <ul ref={menuRef} {...htmlProps} className={cls} data-menu="menu">
      {React.Children.map(children, (child: React.ReactNode) => {
        if (!React.isValidElement(child)) return child;
        const props: { inlineIndent?: number, inlineCollapsed?: boolean} = {};
        // Sub Menu
        if (child.props.children) {
          props.inlineIndent = inlineIndent;
        }
        return React.cloneElement(child, Object.assign({ ...props }, child.props, {  }));
      })}
    </ul>
  );
}

interface CompoundedComponent extends React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLUListElement>>  {
  Item: typeof MenuItem;
  SubMenu: typeof SubMenu;
  Divider: typeof Divider;
}

export default React.forwardRef<unknown, MenuProps>(InternalMenu) as CompoundedComponent;
