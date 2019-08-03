import React from 'react';
import classNames from 'classnames';
import { IProps, HTMLUlProps } from '../utils/props';
import MenuItem from './MenuItem';
import Divider from './Divider';
import SubMenu from './SubMenu';
import './style/menu.less';

export interface IMenuProps extends IProps, HTMLUlProps {
  theme?: 'light' | 'dark';
  inlineIndent?: number;
  bordered?: boolean;
}

export default class Menu extends React.Component<IMenuProps> {
  static Item = MenuItem;
  static SubMenu = SubMenu;
  static Divider = Divider;
  public static defaultProps: IMenuProps = {
    prefixCls: 'w-menu',
    theme: 'light',
    inlineIndent: 10,
    bordered: false,
  }
  static displayName = 'uiw.Menu';
  public render() {
    const { prefixCls, className, children, bordered, theme, inlineIndent, ...htmlProps } = this.props;
    const cls = classNames(prefixCls, className, { 'w-bordered': bordered, [`${prefixCls}-${theme}`]: theme });
    return (
      <ul {...htmlProps} className={cls} data-menu="menu">
        {React.Children.map(children, (child: any) => {
          const props: { inlineIndent?: number} = {};
          if (child.props.children) {
            props.inlineIndent = inlineIndent;
          }
          return React.cloneElement(child, Object.assign({ ...props }, child.props, {}));
        })}
      </ul>
    );
  }
}
